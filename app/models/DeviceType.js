const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeviceType = new Schema(
    {
        name: { type: String, unique: true },
        // quantity: { type: Number, default: 0 },
        isDeleted: { type: Boolean, default: false },
    },
);

module.exports = mongoose.model('Device-type', DeviceType);
