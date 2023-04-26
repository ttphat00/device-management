const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Brand = new Schema(
    {
        name: { type: String },
        deviceTypeId: { type: Schema.Types.ObjectId, ref: 'Device-type' },
        isDeleted: { type: Boolean, default: false },
    },
);

module.exports = mongoose.model('Brand', Brand);
