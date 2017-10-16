require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise
const db = mongoose.connection;
const { User, Game, System } = require('./schema');

User.remove({}, (err) => {
    console.log(err);
})

System.remove({}, (err) => {
    console.log(err);
})

Game.remove({}, (err) => {
    console.log(err);
})

const re4 = new Game({
    title: "Resident Evil 4",
    price: "19.99",
    releaseYear: "2005",
    coverLink: "https://gamefaqs.akamaized.net/box/5/2/8/15528_front.jpg",
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
    coverLink: "https://gamefaqs.akamaized.net/box/6/0/3/55603_front.jpg",
    description: `Kingdom Hearts II is the sequel to the action role-playing game featuring a host of familiar characters from movies and video games alike.
     Disney characters Sora, Donald Duck, and Goofy are searching for their missing king, and it is up to you to help find him.
    The game also features characters such as Captain Jack Sparrow from Pirates of the Caribbean and characters from the Final Fantasy series of games. 
    Voice actors Haley Joel Osment and James Woods join the cast, and the veteran designers of the original Kingdom Hearts have returned to work on the sequel.`
})

const gtaSanAndreas = new Game({
    title: "Grand Theft Auto: San Andreas",
    price: "19.99",
    releaseYear: "2004",
    coverLink: "https://gamefaqs.akamaized.net/box/8/5/8/53858_front.jpg",
    description: `Five years ago Carl Johnson escaped from the pressures of life in Los Santos, San Andreas... a city tearing itself apart with gang trouble, drugs and corruption. Where filmstars and millionaires do their best to avoid the dealers and gangbangers.
    
    Now, it's the early 90s. Carl's got to go home. His mother has been murdered, his family has fallen apart and his childhood friends are all heading towards disaster.
    
    On his return to the neighborhood, a couple of corrupt cops frame him for homicide. CJ is forced on a journey that takes him across the entire state of San Andreas, to save his family and to take control of the streets.`
})

const games = [re4, kh2, gtaSanAndreas];

const playStation2 = new System({
    name: "PlayStation 2",
    releaseYear: "2000",
    games: [re4, kh2, gtaSanAndreas]
})




const musa = new User({
    firstName: "Musa",
    lastName: "Sillah",
    email: "luffyfan99@yahoo.com",
    username: "msillah",
    password: "saiyaman"
})

games.forEach((game) => {
    game.save()
        .then((game) => {
            console.log(`${game.title} saved!`)
        })
        .catch((error) => {
            console.log(error)
        })
})

musa.save()
    .then((user) => {
        console.log(`${user.firstName} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

playStation2.save()
    .then((system) => {
        console.log(`${system.name} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

db.close();