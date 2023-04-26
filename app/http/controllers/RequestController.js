const Request = require('../../models/Request');

class RequestController{
    async index(req, res, next) {
        try {
            const requests = await Request.find({}).populate([
                { path: 'requestTypeId' },
                { path: 'statusId' },
                { path: 'createdBy', populate: [{ path: 'roleId' }, { path: 'locationId' }] },
                { path: 'equipmentId', populate: [
                    { path: 'locationId' },
                    { path: 'statusId' },
                    { path: 'brandId', populate: { path: 'deviceTypeId' } }
                ]},
            ]);
            return res.json(requests);
        } catch (error) {
            return next(error);
        }
    }

    async getByUserId(req, res, next) {
        try {
            const requests = await Request.find({createdBy: req.user._id}).populate([
                { path: 'requestTypeId' },
                { path: 'statusId' },
                { path: 'createdBy', populate: [{ path: 'roleId' }, { path: 'locationId' }] },
                { path: 'equipmentId', populate: [
                    { path: 'locationId' },
                    { path: 'statusId' },
                    { path: 'brandId', populate: { path: 'deviceTypeId' } }
                ]},
            ]);
            return res.json(requests);
        } catch (error) {
            return next(error);
        }
    }

    async store(req, res, next) {
        const request = await Request.findOne({ createdBy: req.user._id, equipmentId: req.body.equipmentId });
        // console.log(request.createdBy)
        // console.log(req.user._id)
        if (request){
            if(request.createdBy == req.user._id){
                return res.status(409).json('You have already submitted this request.');
            }else return res.status(409).json('This device has been borrowed by another person.');
        }
    
        let newRequest = new Request({
            ...req.body,
            createdBy: req.user._id
        });
    
        try {
            await (await newRequest.save()).populate([
                { path: 'requestTypeId' },
                { path: 'statusId' },
                { path: 'createdBy', populate: [{ path: 'roleId' }, { path: 'locationId' }] },
                { path: 'equipmentId', populate: [
                    { path: 'locationId' },
                    { path: 'statusId' },
                    { path: 'brandId', populate: { path: 'deviceTypeId' } }
                ]},
            ]);
            return res.json(newRequest);
        } catch (error) {
            return next(error);
            // return res.status(400).json('Có lỗi trong quá trình thêm, vui lòng thử lại.')
        }
    }

    async update(req, res, next) {
        try {
            const request = await Request.findOne({_id: req.params.id})
            request.statusId = req.body.statusId || request.statusId;
            await (await request.save()).populate([
                { path: 'requestTypeId' },
                { path: 'statusId' },
                { path: 'createdBy', populate: [{ path: 'roleId' }, { path: 'locationId' }] },
                { path: 'equipmentId', populate: [
                    { path: 'locationId' },
                    { path: 'statusId' },
                    { path: 'brandId', populate: { path: 'deviceTypeId' } }
                ]},
            ]);
            return res.json(request);
        } catch (error) {
            return next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            await Request.deleteOne({ _id: req.params.id });
            return res.json('Deleted successfully!');
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new RequestController();