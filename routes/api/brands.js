const express = require('express');
const brandController = require('../../app/http/controllers/BrandController');
const router = express.Router();

router.get('/', brandController.index);

module.exports = router;