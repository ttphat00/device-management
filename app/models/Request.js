const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Request = new Schema(
    {
        message: { type: String, default: null },
        requestTypeId: { type: Schema.Types.ObjectId, ref: 'Request-type' },
        statusId: { type: Schema.Types.ObjectId, ref: 'Request-status' },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        equipmentId: { type: Schema.Types.ObjectId, ref: 'Equipment' },
        isDeleted: { type: Boolean, default: false },
        createdAt: { type: Date },
        updatedAt: { type: Date },
    },
);

module.exports = mongoose.model('Request', Request);
