const express = require('express');
const router = express.Router();
const vitalController = require('../controllers/vitalController');

router.post('/submit', vitalController.submitVital);



module.exports = router;