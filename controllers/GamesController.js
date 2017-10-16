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

router.get('/:id', async (req, res) => {
    try {
        const game = await Game.findById(req.params.id)
        res.json(game)
    } catch (error) {
        res.send(error)
    }
})



module.exports = router;