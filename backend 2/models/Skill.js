const mongoose = require('mongoose'); const skillSchema = new mongoose.Schema({ name: String, percentage: Number, category: String }); module.exports = mongoose.model('Skill', skillSchema);
