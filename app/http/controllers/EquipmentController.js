const Equipment = require('../../models/Equipment');

class EquipmentController{
    async index(req, res, next) {
        try {
            const equipments = await Equipment.find({}).populate([
                { path: 'locationId' },
                { path: 'statusId' },
                { path: 'brandId', populate: { path: 'deviceTypeId' } }
            ]);
            return res.json(equipments);
        } catch (error) {
            return next(error);
        }
    }

    async store(req, res, next) {
        if (!req.file) {
            next(new Error('No file uploaded!'));
            return;
        }

        // const equipment = await Equipment.findOne({ name: req.body.name });
        // if (equipment){
        //     return res.status(409).json('Thiết bị đã tồn tại.')
        // }
    
        let newEquipment = new Equipment({
            ...req.body,
            image: req.file.path,
        });
    
        try {
            await (await newEquipment.save()).populate([
                { path: 'locationId' },
                { path: 'statusId' },
                { path: 'brandId', populate: { path: 'deviceTypeId' } }
            ]);
            return res.json(newEquipment);
        } catch (error) {
            return next(error);
            // return res.status(400).json('Có lỗi trong quá trình thêm, vui lòng thử lại.')
        }
    }

    async update(req, res, next) {
        try {
            const equipment = await Equipment.findOne({_id: req.params.id})
            equipment.name = req.body.name || equipment.name;
            equipment.description = req.body.description || equipment.description;
            equipment.statusId = req.body.statusId || equipment.statusId;
            equipment.updatedAt = req.body.updatedAt || equipment.updatedAt;
            equipment.image = req.file?.path || equipment.image;
            await (await equipment.save()).populate([
                { path: 'locationId' },
                { path: 'statusId' },
                { path: 'brandId', populate: { path: 'deviceTypeId' } }
            ]);
            return res.json(equipment);
            // await Equipment.updateOne({ _id: req.params.id }, req.body);
            // return res.json('Updated successfully!');
        } catch (error) {
            return next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            await Equipment.deleteOne({ _id: req.params.id });
            return res.json('Deleted successfully!');
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new EquipmentController();