const express = require('express')
const router = express.Router({ mergeParams: true })
const { System } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const system = await System.find({})
        res.json(system)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
