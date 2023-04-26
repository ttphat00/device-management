const express = require('express');
const deviceTypeController = require('../../app/http/controllers/DeviceTypeController');
const router = express.Router();

router.get('/', deviceTypeController.index);

module.exports = router;