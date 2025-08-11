const express = require('express');
const router = express.Router();
const trips = require('../controllers/trips');

// API routes
router.get('/trips', trips.tripsList);
router.get('/trips/:tripCode', trips.tripsFindByCode);
router.post('/trips', trips.tripsAddTrip);
router.put('/trips/:tripCode', trips.tripsUpdateTrip);
router.delete('/trips/:tripCode', trips.tripsDeleteTrip);

module.exports = router;
