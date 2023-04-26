const bcrypt = require('bcryptjs');
const userController = require('./UserController');
const SALT_ROUNDS = 10;

class AuthController {
    async register(req, res, next) {
        const email = req.body.email.toLowerCase();
        const user = await userController.getUser(email);
        if (user) res.status(409).json('This account already exists.');
        else {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const roleId = req.body.roleId;
            const createdAt = req.body.createdAt;
            const hashPassword = bcrypt.hashSync(
                req.body.password,
                SALT_ROUNDS,
            );
            const newUser = {
                firstName,
                lastName,
                email,
                password: hashPassword,
                roleId,
                createdAt,
            };
            const createUser = await userController.createUser(newUser);
            if (!createUser) {
                return res
                    .status(400)
                    .json(
                        'There was an error during account creation, please try again.',
                    );
            }
            return res.json(createUser);
        }
    }

    async login(req, res) {
        const email = req.body.email.toLowerCase();
        const password = req.body.password;

        const user = await userController.getUser(email);
        if (!user) {
            return res.status(401).json('Email does not exist.');
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json('Incorrect password.');
        }

        const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

        const dataForAccessToken = {
            email: user.email,
        };
        const accessToken = await userController.generateToken(
            dataForAccessToken,
            accessTokenSecret,
            accessTokenLife,
        );
        if (!accessToken) {
            return res
                .status(401)
                .json('Login failed, please try again.');
        }

        // let refreshToken = randToken.generate(jwtVariable.refreshTokenSize); // tạo 1 refresh token ngẫu nhiên
        // if (!user.refreshToken) {
        //     // Nếu user này chưa có refresh token thì lưu refresh token đó vào database
        //     await userModel.updateRefreshToken(user.username, refreshToken);
        // } else {
        //     // Nếu user này đã có refresh token thì lấy refresh token đó từ database
        //     refreshToken = user.refreshToken;
        // }

        return res.json({
            msg: 'Logged in successfully.',
            accessToken,
            // refreshToken,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                avatar: user.avatar,
                gender: user.gender,
                locationId: user.locationId,
                roleId: user.roleId,
                isDeleted: user.isDeleted,
                createdAt: user.createdAt,
            },
        });
    }
}

module.exports = new AuthController();
