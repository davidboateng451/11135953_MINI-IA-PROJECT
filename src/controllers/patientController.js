const Patient = require('../models/patient');

exports.registerPatient = async (req, res) => {
 try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};
