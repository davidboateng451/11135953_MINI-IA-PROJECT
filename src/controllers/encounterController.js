const Encounter = require('../models/encounter');

exports.startEncounter = async (req, res) => {
 try {
    const newEncounter = new Encounter(req.body);
    await newEncounter.save();
    res.status(201).json(newEncounter);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};

