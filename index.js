require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./connection');

const port = process.env.PORT || 8000;
const mongoUrl = process.env.DB_URL;


// Routers
const aliensRouter = require('./routes/aliens');
const charactersRouter = require('./routes/characters');

// Connection
connectDB(mongoUrl)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error("Database Connection Error:", err));


// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use("/api/alien", aliensRouter);
app.use("/api/character", charactersRouter);

// 404 Error Handler
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(port, () => {
    console.log(`Server Started`);
});