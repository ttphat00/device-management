const express = require('express');
const requestStatusController = require('../../app/http/controllers/RequestStatusController');
const router = express.Router();

router.get('/', requestStatusController.index);

module.exports = router;