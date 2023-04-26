const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestStatus = new Schema(
    {
        name: { type: String, unique: true },
    },
);

module.exports = mongoose.model('Request-status', RequestStatus);
