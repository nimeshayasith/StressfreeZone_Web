const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const listRoutes = require('./routes/listRoutes')


//const { credential } = require('firebase-admin');

dotenv.config();

connectDB()

const app = express()


app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

// Bodyparser middleware
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/lists',listRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
