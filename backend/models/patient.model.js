const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    dateOfBirth: { type: Date, required: true }, 
    phone: { type: String, required: true, match: [/^\d{10}$/, 'Please enter a valid phone number']  },
    address: { type: String },
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
