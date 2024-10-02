const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    appointmentTime: { type: Date, required: true }, 
    patientId: { type: String, required: true },
    doctorId: { type: String, required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
});

