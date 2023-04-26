const RequestStatus = require('../../models/RequestStatus');

class RequestStatusController{
    async index(req, res, next) {
        try {
            const status = await RequestStatus.find({});
            return res.json(status);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new RequestStatusController();