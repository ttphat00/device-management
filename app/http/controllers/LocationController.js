const Location = require('../../models/Location');

class LocationController{
    async index(req, res, next) {
        try {
            const locations = await Location.find({});
            return res.json(locations);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new LocationController();