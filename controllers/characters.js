const Character = require('../models/characters');

async function getAllCharacters(req, res) {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getRandomCharacter(req, res) {
    try {
        const count = await Character.countDocuments();
        const random = Math.floor(Math.random() * count);
        const randomCharacter = await Character.findOne().skip(random);
        res.status(200).json(randomCharacter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getCharacterById(req, res) {
    try {
        const character = await Character.findOne({ id: req.params.id });
        if (!character) {
            return res.status(404).json({ message: 'Character not found' });
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllCharacters,
    getRandomCharacter,
    getCharacterById,
};