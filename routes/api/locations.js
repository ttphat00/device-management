const express = require('express');
const locationController = require('../../app/http/controllers/LocationController');
const router = express.Router();

router.get('/', locationController.index);

module.exports = router;