// index.js
const express = require('express');
const mongoose = require('mongoose');
const verifyToken = require('./middlewares/authMiddleware'); // Import the middleware

const app = express();
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/book_rental_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Apply the middleware to the protected route
app.get('/api/protected-route', verifyToken, (req, res) => {
    // This route is protected and requires a valid token
    res.json({ message: 'Access granted' });
});

// Use your existing routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
