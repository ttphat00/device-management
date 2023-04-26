const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestType = new Schema(
    {
        name: { type: String, unique: true },
    },
);

module.exports = mongoose.model('Request-type', RequestType);
