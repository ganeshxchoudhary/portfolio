const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-pro';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

// Dynamic Content Routes
const defineRoutes = require('./routes/content');
app.use('/api/skills', defineRoutes(require('./models/Skill')));
app.use('/api/experience', defineRoutes(require('./models/Experience')));
app.use('/api/education', defineRoutes(require('./models/Education')));
app.use('/api/work', defineRoutes(require('./models/Work')));

// Basic Route
app.get('/', (req, res) => {
    res.send('Portfolio Pro Backend API is running...');
});

// Port
// Port
const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
