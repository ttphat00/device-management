const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Equipment = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        locationId: { type: Schema.Types.ObjectId, ref: 'Location', default: null },
        brandId: { type: Schema.Types.ObjectId, ref: 'Brand' },
        statusId: { type: Schema.Types.ObjectId, ref: 'Equipment-status' },
        isDeleted: { type: Boolean, default: false },
        createdAt: { type: Date },
        updatedAt: { type: Date },
    },
);

module.exports = mongoose.model('Equipment', Equipment);
