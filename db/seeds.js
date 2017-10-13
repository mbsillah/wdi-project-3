require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const { User, Game, System } = require('./schema');

const re4 = new Game({
    title: "Resident Evil 4",
    price: "19.99",
    releaseYear: "2005",
    description: `Resident Evil 4 marks a new chapter in the Resident Evil series
    . You'll rejoin Leon S. Kennedy six years after his first mission as a
    rookie cop from Resident Evil 2. 
    Now a US agent, Leon is on a top secret mission to investigate the disappearance
    of the president's daughter. As Leon, you must make your way to a mysterious location in Europe, 
    where new enemies await. Take them down by using enhanced aim-and-shoot features and a new action button.`

})

const kh2 = new Game({
    title: "Kingdom Hearts II",
    price: "19.99",
    releaseYear: "2005",
    description: `Kingdom Hearts II is the sequel to the action role-playing game featuring a host of familiar characters from movies and video games alike.
     Disney characters Sora, Donald Duck, and Goofy are searching for their missing king, and it is up to you to help find him.
    The game also features characters such as Captain Jack Sparrow from Pirates of the Caribbean and characters from the Final Fantasy series of games. 
    Voice actors Haley Joel Osment and James Woods join the cast, and the veteran designers of the original Kingdom Hearts have returned to work on the sequel.`
})

const playStation2 = new System({
    name: "PlayStation 2",
    releaseYear: "2000",
    games: [re4, kh2]
})

const musa = new User({
    firstName: "Musa",
    lastName: "Sillah",
    email: "luffyfan99@yahoo.com",
    username: "msillah",
    password: "saiyaman"
})

User.remove({})
    .then(() => musa.save())
    .then(() => console.log('Successful save'))
    .then(() => mongoose.connection.close())

System.remove({})
    .then(() => playStation2.save())
    .then(() => console.log('Successful save'))
    .then(() => mongoose.connection.close())