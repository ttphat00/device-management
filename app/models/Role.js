const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Role = new Schema(
    {
        name: { type: String, unique: true },
        isDeleted: { type: Boolean, default: false },
    },
);

module.exports = mongoose.model('Role', Role);
