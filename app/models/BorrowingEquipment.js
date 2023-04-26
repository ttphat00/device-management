const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BorrowingEquipment = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        equipmentId: { type: Schema.Types.ObjectId, ref: 'Equipment' },
        fromTime: { type: Date },
        toTime: { type: Date },
        isDeleted: { type: Boolean, default: false },
        createdAt: { type: Date },
        updatedAt: { type: Date },
    },
);

module.exports = mongoose.model('Borrowing-equipment', BorrowingEquipment);
