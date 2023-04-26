const express = require('express');
const router = express.Router();

const authController = require('../../app/http/controllers/AuthController');
const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/register', isAuth, authController.register);
router.post('/login', authController.login);

module.exports = router;
