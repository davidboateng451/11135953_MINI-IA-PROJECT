const mongoose = require('mongoose');

const EncounterSchema = new mongoose.Schema({
 patientId: { type: String, required: true },
 dateAndTime: { type: Date, required: true },
 typeOfEncounter: { type: String, required: true },
});

module.exports = mongoose.model('Encounter', EncounterSchema);