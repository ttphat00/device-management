const express = require('express');
const requestTypeController = require('../../app/http/controllers/RequestTypeController');
const router = express.Router();

router.get('/', requestTypeController.index);

module.exports = router;