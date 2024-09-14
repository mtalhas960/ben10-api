const Alien = require('../models/aliens');

async function getAllAliens(req, res) {
    try {
        const aliens = await Alien.find();
        res.status(200).json(aliens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getRandomAlien(req, res) {
    try {
        const count = await Alien.countDocuments();
        const random = Math.floor(Math.random() * count);
        const randomAlien = await Alien.findOne().skip(random);
        res.status(200).json(randomAlien);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAlienById(req, res) {
    try {
        const alien = await Alien.findOne({ id: req.params.id });
        if (!alien) {
            return res.status(404).json({ message: 'Alien not found' });
        }
        res.status(200).json(alien);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllAliens,
    getRandomAlien,
    getAlienById,
};