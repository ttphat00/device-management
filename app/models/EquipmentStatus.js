const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EquipmentStatus = new Schema(
    {
        name: { type: String, unique: true },
    },
);

module.exports = mongoose.model('Equipment-status', EquipmentStatus);
