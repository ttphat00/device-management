const express = require('express');
const equipmentController = require('../../app/http/controllers/EquipmentController');
const router = express.Router();

const fileUploader = require('../../config/cloudinary.config');
const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post(
    '/',
    fileUploader.single('file'),
    isAuth,
    equipmentController.store,
);

router.put('/:id', fileUploader.single('file'), isAuth, equipmentController.update);
router.delete('/:id', isAuth, equipmentController.destroy);
router.get('/', equipmentController.index);

module.exports = router;