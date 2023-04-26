const express = require('express');
const roleController = require('../../app/http/controllers/RoleController');
const router = express.Router();

router.get('/', roleController.index);

module.exports = router;