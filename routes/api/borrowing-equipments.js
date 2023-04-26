const express = require('express');
const borrowingEquipmentController = require('../../app/http/controllers/BorrowingEquipmentController');
const router = express.Router();

const fileUploader = require('../../config/cloudinary.config');

const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/', isAuth, borrowingEquipmentController.store);
router.get('/user-borrowing-equipments`', isAuth, borrowingEquipmentController.getByUserId);
router.get('/', borrowingEquipmentController.index);

module.exports = router;
