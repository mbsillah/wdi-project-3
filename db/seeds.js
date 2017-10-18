require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
//mongoose.connect("mongodb://heroku_z7vxktxs:4rqvr1qn0niivqtbgvqljqeag6@ds163613.mlab.com:63613/heroku_z7vxktxs")
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

const halo2 = new Game({
    title: "Halo 2",
    price: "19.99",
    releaseYear: "2004",
    coverLink: "https://gamefaqs.akamaized.net/box/9/9/0/18990_front.jpg",
    description: `The Covenant alien race threatens to destroy all humankind, and the only thing standing in its way is Master Chief, 
    a genetically enhanced supersoldier. Master Chief returns in Halo 2, which features new vehicles, weapons, environments, and more. 
    This time, you can interact with your environment, wield two weapons at the same time, board opponents' vehicles, 
    and even switch sides to play the role of a Covenant Elite. Halo 2 also supports broadband multiplayer action via Xbox Live.`
})

const starWarsKotor = new Game({
    title: "Star Wars: Knights of the Old Republic",
    price: "19.99",
    releaseYear: "2003",
    coverLink: "https://gamefaqs.akamaized.net/box/2/4/7/14247_front.jpg",
    description: `Long before the Galactic Civil War, an epic drama begins. 
    Engage in this saga set in the Golden Age of the Republic--over 4,000 years before the first Star Wars film, when both Jedi and Sith number in the thousands. 
    With the Galaxy reeling from a recent conflict with the Dark Lords, the ongoing battle between the Jedi and the Sith rages on. 
    It's up to guide your customizable and evolving characters through ten different worlds, fast-paced minigames, and locations including a Sith world, the Wookie homeworld, and the Jedi Academy. 
    Your actions determine the outcome of this colossal galactic war--and your destiny as a Jedi.`
})

const ssbm = new Game({
    title: "Super Smash Bros. Melee",
    price: "49.99",
    releaseYear: "2001",
    coverLink: "https://gamefaqs.akamaized.net/box/0/8/4/14084_front.jpg",
    description: `Nintendo's all-star cast of combatants is back in Super Smash Bros. Melee, along with a new batch of brawlers ready to tear it up. 
    The sequel to Super Smash Bros. keeps the same basic premise: Characters duke it out in interactive environments, using special attacks and various items to knock each other into the abyss. 
    Some new defensive techniques add an even deeper level of complexity to the combat. 
    In addition to traditional battle royale matches, players can select all-new ways to play like Coin mode and Tournament mode.`
})

const games = [re4, kh2, gtaSanAndreas, halo2, starWarsKotor, ssbm];

const playStation2 = new System({
    name: "PlayStation 2",
    releaseYear: "2000",
    games: [re4, kh2, gtaSanAndreas]
})

const xbox = new System({
    name: "Xbox",
    releaseYear: "2001",
    games: [halo2, starWarsKotor]
})

const gameCube = new System({
    name: "Nintendo Gamecube",
    releaseYear: "2001",
    games: [ssbm]
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

xbox.save()
    .then((system) => {
        console.log(`${system.name} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

gameCube.save()
    .then((system) => {
        console.log(`${system.name} saved`)
    })
    .catch((error) => {
        console.log(error)
    })


db.close();