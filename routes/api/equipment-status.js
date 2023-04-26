const express = require('express');
const equipmentStatusController = require('../../app/http/controllers/EquipmentStatusController');
const router = express.Router();

// router.get('/status', equipmentStatusController.getStatusByName);
router.get('/', equipmentStatusController.index);

module.exports = router;