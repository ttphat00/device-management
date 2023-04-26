const EquipmentStatus = require('../../models/EquipmentStatus');

class EquipmentStatusController{
    async index(req, res, next) {
        try {
            const status = await EquipmentStatus.find({});
            return res.json(status);
        } catch (error) {
            return next(error);
        }
    }

    // async getStatusByName(req, res, next) {
    //     try {
    //         const status = await EquipmentStatus.findOne({ name: req.query.name });
    //         return status;
    //     } catch (error) {
    //         return next(error);
    //     }
    // }
}

module.exports = new EquipmentStatusController();