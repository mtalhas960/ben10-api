const express = require('express')
const router = express.Router();
const { getAllCharacters, getCharacterById, getRandomCharacter } = require('../controllers/characters')

router.route('/').get(getAllCharacters)
router.route('/random').get(getRandomCharacter)
router.route('/id/:id').get(getCharacterById)

module.exports = router