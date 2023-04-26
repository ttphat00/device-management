const BorrowingEquipment = require('../../models/BorrowingEquipment');

class BorrowingEquipmentController{
    async index(req, res, next) {
        try {
            const equipments = await BorrowingEquipment.find({}).populate([
                { path: 'userId', populate: [{ path: 'roleId' }, { path: 'locationId' }] },
                { path: 'equipmentId', populate: [
                    { path: 'locationId' },
                    { path: 'statusId' },
                    { path: 'brandId', populate: { path: 'deviceTypeId' } }
                ]},
            ]);
            return res.json(equipments);
        } catch (error) {
            return next(error);
        }
    }

    async getByUserId(req, res, next) {
        try {
            const equipments = await BorrowingEquipment.find({userId: req.user._id}).populate([
                { path: 'userId', populate: [{ path: 'roleId' }, { path: 'locationId' }] },
                { path: 'equipmentId', populate: [
                    { path: 'locationId' },
                    { path: 'statusId' },
                    { path: 'brandId', populate: { path: 'deviceTypeId' } }
                ]},
            ]);
            return res.json(equipments);
        } catch (error) {
            return next(error);
        }
    }

    async store(req, res, next) {
        // const request = await Request.findOne({ userId: req.user._id, equipmentId: req.body.equipmentId });
        // if (request){
        //     if(request.createdBy._id === req.user._id){
        //         return res.status(409).json('You have already submitted this request.');
        //     }else return res.status(409).json('This device has been borrowed by another person.');
        // }
    
        let newEquipment = new BorrowingEquipment({
            ...req.body,
        });
        
        try {
            await (await newEquipment.save()).populate([
                { path: 'userId', populate: [{ path: 'roleId' }, { path: 'locationId' }] },
                { path: 'equipmentId', populate: [
                    { path: 'locationId' },
                    { path: 'statusId' },
                    { path: 'brandId', populate: { path: 'deviceTypeId' } }
                ]},
            ]);
            return res.json(newEquipment);
        } catch (error) {
            return next(error);
            // return res.status(400).json('Có lỗi trong quá trình thêm, vui lòng thử lại.')
        }
    }

    // async update(req, res, next) {
    //     try {
    //         await Equipment.updateOne({ _id: req.params.id }, req.body);
    //         return res.json('Updated successfully!');
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    // async destroy(req, res, next) {
    //     try {
    //         await Request.deleteOne({ _id: req.params.id });
    //         return res.json('Deleted successfully!');
    //     } catch (error) {
    //         return next(error);
    //     }
    // }
}

module.exports = new BorrowingEquipmentController();