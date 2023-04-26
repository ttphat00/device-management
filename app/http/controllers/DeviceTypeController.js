const DeviceType = require('../../models/DeviceType');

class DeviceTypeController{
    async index(req, res, next) {
        try {
            const types = await DeviceType.find({});
            return res.json(types);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new DeviceTypeController();