var express = require('express');
var router = express.Router();
var travel = require('../controllers/travel');

/* GET travel page. */
router.get('/', travel.travel);

module.exports = router;
