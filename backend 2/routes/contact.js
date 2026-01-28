const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST a new message
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

module.exports = router;
