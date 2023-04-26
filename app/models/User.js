const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, unique: true },
        password: { type: String },
        phone: { type: String, default: null },
        avatar: {
            type: String,
            default:
                'https://res.cloudinary.com/petshop347/image/upload/v1647709187/icon_uyz033.png',
        },
        gender: { type: String, default: null },
        locationId: { type: Schema.Types.ObjectId, ref: 'Location', default: null },
        roleId: { type: Schema.Types.ObjectId, ref: 'Role' },
        isDeleted: { type: Boolean, default: false },
        createdAt: { type: Date },
    },
);

module.exports = mongoose.model('User', User);
