const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const listRoutes = require('./routes/listRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentRoutes = require('./routes/payment');

const videoRoutes = require('./routes/videoRoutes');

dotenv.config();

connectDB();

const app = express()


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
    allowedHeaders: 'Content-Type, Authorization'
}))


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });

app.use('/api/auth', authRoutes);
app.use('/api/lists',listRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/payment',paymentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));