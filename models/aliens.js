const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
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
    planet: {
        type: String,
        required: true
    },
    abilities: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Alien = mongoose.model('Alien', alienSchema);

module.exports = Alien;