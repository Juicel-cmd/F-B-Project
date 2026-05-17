require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const { pool } = require('./src/database/db');
const authRouter = require('./src/routes/authRoute');
// ✅ FIXED: cartRouter is now imported and registered
const cartRouter = require('./src/routes/cartRoutes');

const app = express();

// MIDDLEWARE
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// SERVE STATIC FRONTEND FILES
app.use(express.static(path.join(__dirname, 'frontend')));

// ROUTES
app.use('/auth', authRouter);
// ✅ FIXED: cart routes now active
app.use('/cart', cartRouter);

// DATABASE TEST ROUTE
app.get('/db-test', async (req, res) => {
    try {
        console.log("Start");
        const result = await pool.query("SELECT current_database()");
        console.log("End");
        res.send(`The database name is ${result.rows[0].current_database}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Database connection failed" });
    }
});

// RESERVATION ROUTE
app.post('/reservation', async (req, res) => {
    try {
        const { name, email, date, time } = req.body;
        await pool.query(
            `INSERT INTO reservations (name, email, reservation_date, reservation_time) VALUES ($1, $2, $3, $4)`,
            [name, email, date, time]
        );
        res.status(201).json({ message: "Reservation saved successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Reservation failed" });
    }
});

// FALLBACK ROUTE
app.get('*path', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});