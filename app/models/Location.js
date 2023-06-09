const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Location = new Schema(
    {
        name: { type: String, unique: true },
    },
);

module.exports = mongoose.model('Location', Location);
