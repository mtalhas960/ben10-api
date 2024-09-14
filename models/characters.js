const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    abilities: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;