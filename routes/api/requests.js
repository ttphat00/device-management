const express = require('express');
const requestController = require('../../app/http/controllers/RequestController');
const router = express.Router();

const fileUploader = require('../../config/cloudinary.config');

const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/', isAuth, requestController.store);
router.put('/:id', isAuth, requestController.update);
router.delete('/:id', isAuth, requestController.destroy);
router.get('/user-requests', isAuth, requestController.getByUserId);
router.get('/', requestController.index);

module.exports = router;
