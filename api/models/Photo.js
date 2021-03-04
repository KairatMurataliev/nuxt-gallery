const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String, required: true
    }
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;