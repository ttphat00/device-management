const Brand = require('../../models/Brand');

class BrandController{
    async index(req, res, next) {
        try {
            const brands = await Brand.find({}).populate('deviceTypeId');
            return res.json(brands);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new BrandController();