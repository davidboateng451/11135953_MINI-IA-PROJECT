const mongoose = require('mongoose');

const VitalSchema = new mongoose.Schema({
 patientId: { type: String, required: true },
 encounterId: { type: String, required: true },
 bloodPressure: { type: String, required: true },
 temperature: { type: String, required: true },
 pulse: { type: String, required: true },
 spo2: { type: String, required: true },
});

module.exports = mongoose.model('Vital', VitalSchema);