const express = require('express')
const router = express.Router({mergeParams: true})
const { Game } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const games = await Game.find({})
        res.json(games)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;