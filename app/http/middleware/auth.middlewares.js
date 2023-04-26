const userController = require('../controllers/UserController');

exports.isAuth = async (req, res, next) => {
    // Lấy access token từ header
    const accessTokenFromHeader = req.headers.authorization;
    if (!accessTokenFromHeader) {
        return res.status(401).json('Access token not found!');
    }

    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    const verified = await userController.verifyToken(
        accessTokenFromHeader,
        accessTokenSecret,
    );
    if (!verified) {
        return res
            .status(401)
            .json('You do not have access to this feature!');
    }

    const user = await userController.getUser(verified.payload.email);
    req.user = user;

    return next();
};
