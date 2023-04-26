const RequestType = require('../../models/RequestType');

class RequestTypeController{
    async index(req, res, next) {
        try {
            const types = await RequestType.find({});
            return res.json(types);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new RequestTypeController();