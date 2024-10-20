const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    menstrualCycleData: {
        startDate: { type: Date },
        cycleLength: { type: Number },
        lastUpdated: { type: Date, default: Date.now },
    },
});
module.exports = mongoose.model('User', userSchema);
