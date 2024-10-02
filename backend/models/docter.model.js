const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    qualification: { type: String },
    specialization: { type: String, required: true },
    address: { type: String, required: true },
    yearsOfExperience: { type: Number, min: 0 },
    contact: { type: String, required: true, match: [/^\d{10}$/, 'Please enter a valid contact number'] },
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
}, { timestamps: true });

module.exports = mongoose.model('Doctor', docterSchema);