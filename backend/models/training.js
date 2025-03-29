const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Kihon', 'Kata', 'Kumite'],
        required: true,
    },
    duration: {
        type: Number,
        required: true,

    },
    date: {
        type: Date,
        default: Date.now,

    },
    notes: {
        type: String,
    },


});

module.exports = mongoose.model('Training', TrainingSchema); 