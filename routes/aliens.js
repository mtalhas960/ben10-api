const express = require('express')
const router = express.Router();
const { getAllAliens, getAlienById, getRandomAlien } = require('../controllers/aliens')

router.route('/').get(getAllAliens)
router.route('/random').get(getRandomAlien)
router.route('/id/:id').get(getAlienById)

module.exports = router