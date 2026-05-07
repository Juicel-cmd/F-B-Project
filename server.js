require('dotenv').config();
const pool = require('./src/database/db');

const express = require('express');

const app = express();
app.use(express.json());
app.get('/', async (req, res) =>{
    console.log("Start");
    const result = await pool.query("SELECT current_database()");
    console.log("End");
    res.send(`The database name is ${result.rows[0].current_database}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`running ${PORT}`);
});
