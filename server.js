
require('dotenv').config();


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const { pool } = require('./src/database/db');
const authRouter = require('./src/routes/authRoute');

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// SERVE FRONTEND
app.use(express.static(path.join(__dirname, 'Frontend')));

// ROUTES
app.use('/auth', authRouter);

// TEST DATABASE CONNECTION
app.get('/', async (req, res) => {
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

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});