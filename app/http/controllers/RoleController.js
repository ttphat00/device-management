const Role = require('../../models/Role');

class RoleController{
    async index(req, res, next) {
        try {
            const roles = await Role.find({});
            return res.json(roles);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new RoleController();