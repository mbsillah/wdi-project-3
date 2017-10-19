const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

router.post('/new', async (req, res) => {
    try {
        console.log(req.body)
        const newUser = new User(req.body.user)
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

router.put('/:id/edit', async (req, res) => {
    try {
        console.log(req.body)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body.user, { new: true })
        res.json(updatedUser)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        console.log(req.body)
        const deletedUser = await User.findByIdAndRemove(req.params.id)
        res.json(deletedUser)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
