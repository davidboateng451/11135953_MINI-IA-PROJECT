const Vital = require('../models/vital');

exports.submitVital = async (req, res) => {
 try {
    const newVital = new Vital(req.body);
    await newVital.save();
    res.status(201).json(newVital);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};

