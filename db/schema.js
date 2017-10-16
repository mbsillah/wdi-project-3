const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email:  String,
    username: String,
    password: String
    })

const GameSchema = new Schema({
    title: String,
    price: String,
    coverLink: String,
    releaseYear: String,
    description: String

})

const SystemSchema = new Schema({
    name: String,
    releaseYear: String,
    games: [GameSchema]

})

const User = mongoose.model('User', UserSchema);
const Game = mongoose.model('Game', GameSchema);
const System = mongoose.model('System', SystemSchema);

module.exports = {
    User, Game, System
}
