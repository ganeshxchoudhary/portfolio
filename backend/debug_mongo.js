require('dotenv').config();
const mongoose = require('mongoose');
const Message = require('./models/Message');

const MONGODB_URI = process.env.MONGODB_URI;

console.log('Testing MongoDB Connection...');
console.log('URI:', MONGODB_URI.replace(/:([^:@]+)@/, ':****@')); // Hide password in logs

mongoose.connect(MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB successfully.');

        try {
            console.log('Attempting to save a test message...');
            const testMessage = new Message({
                name: 'Test Schema',
                email: 'test@example.com',
                subject: 'Test Subject',
                message: 'This is a test message to verify DB writes.'
            });

            await testMessage.save();
            console.log('Test message saved successfully!');

            // Clean up
            await Message.deleteOne({ _id: testMessage._id });
            console.log('Test message deleted.');

            process.exit(0);
        } catch (err) {
            console.error('Error saving message:', err);
            process.exit(1);
        }
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
