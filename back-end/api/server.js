const express = require('express');
const cors = require('cors');
const server = express();
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(KnexConfig.development);
const faker = require('faker');

// restrict cors access to our netlify
const corsOptions = {
    origin: "https://www.vbeloved.com"
  };

server.use(express.json());
server.use(cors(corsOptions));

server.get('/', (req, res)=>{
    res.send(`Server root.`)
})


//RETURNS ALL USER DATA IN THE DATABASE
server.get('/users', async (req, res) => {

    try {

        const users = await db('users');
        if (users) {
            res.status(200).json(users)
        }

    }

    catch (err) {
        res.status(500).json({ message: 'An error occured while retrieving the data.', err })
    }
});


//TAKES ENTERED USER INFORMATION AND SAVES THEM TO DATABASE; CURRENT ONLY ACCEPTS OBJECTS FORMATTED AS FOLLOWS: {firstname: 'data', lastname: 'data'}

server.post('/registration', async (req,res)=>{
    const {
        firstname, lastname,      // add to user and couples
        p_firstName, p_lastName,  // add to user and couples
        event_date, event_address  // add to weddings
        } = req.body;
    
    try {
        const weddingID = await db.table('weddings').insert({event_date, event_address})
        const userID1 = await db.table('users').insert({firstname, lastname })
    } 
    
    catch (err) {
        
    }

    db.table('users').insert(newUser).then(user => {
        res.status(200).json({ message: 'User Successfully Registered' })
    }).catch(err => {
        res.status(500).json({ message: "An error occured while processing data." })
    })

})


//A FUNCTION TO POPULATE THE DATABASE WITH COUPLES DUMMY DATA
server.get('/dummydata', async (req, res) => {
    let userData = {
        firstname: faker.name.firstName(), 
        lastname: faker.name.lastName(),
        p_firstname: faker.name.firstName(), 
        p_lastname: faker.name.lastName(),
        email: faker.internet.email(),
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`
    }   
    let wedding = {
        event_date: faker.date.future(),
        event_location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
        design_template: Math.floor(Math.random() * 4)
    }
    
    

    try {
        const wedding_id = await db.table('weddings').insert({event_date: faker.date.future(),
        event_address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
        design_template: Math.floor(Math.random() * 4)});
            console.log('weddingID:', wedding_id)
        
        const user1 = await db.table('users').insert({first_name: userData.firstname, last_name: userData.lastname, email: userData.email, wedding_id: wedding_id[0]})
        const user2 = await db.table('users').insert({first_name: userData.p_firstname, last_name: userData.p_lastname, wedding_id: wedding_id[0]})
            console.log('user1:', user1)
        
        const coupleID1 = await db.table('couples').insert({user_id: user1[0], dashboard_access: true})
        const coupleID2 = await db.table('couples').insert({user_id: user2[0], dashboard_access: true})
            console.log('coupleID:', coupleID1)
        
        if(wedding_id && user1 && coupleID1){
            res.status(200).json({wedding_id, coupleID1, coupleID2})
        }

    }

    catch(err){
            console.log(err)
        res.status(500).json({message: 'An error occured while retrieving the data.'})
    }
});

server.get('/dummyguests', async (req,res)=>{
    let userData = {
        first_name: faker.name.firstName(), 
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
        wedding_id: Math.floor(Math.random() * 8)
    }

    let attendArr = ['Not Attending', 'Attending', 'TBD']

    try {
        let wedding_id = Math.ceil(Math.random() * 7)
        let attendIndex = Math.floor(Math.random() * 3)
        let coupleIndex = Math.floor(Math.random() * 2)
        
        let userID = await db.table('users').insert({
        first_name: faker.name.firstName(), 
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
        wedding_id: wedding_id
    }) 
        console.log('userID:', userID)

        let couple = await db.table('users').join('couples', {'users.id': 'couples.user_id'}).where({wedding_id})
        console.log('couple', couple, wedding_id)
        
        let related_spouse = couple[coupleIndex].first_name
        console.log('relatedspouse:', related_spouse)
        console.log('attendingArray:', attendArr[attendIndex], attendIndex)
        let guestID = await db.table('guests').insert({
            user_id: userID[0],
            attending: attendArr[attendIndex],
            related_spouse: related_spouse
        })
        console.log('guestID:', guestID)

        let guests = await db.table('users').join('guests', {'users.id': 'guests.user_id'}).where({wedding_id: 3})

        res.status(200).json(guests)
    } 
    
    catch (err) {
        console.log(err)
       res.status(500).json({message: 'An error occured while retrieving the data.'})
    
    } 

})


//A FUNCTION TO RETRIEVE GUESTS 
server.get('/guests', (req, res) => {
    db('guests')
    .then(note => {
        res.status(200).json(note);
    })
    .catch(err => {
        res.status(500).json({error:'database cannot retrieve information'});
    })
});
// A FUNCTION TO DELETE USERS FROM THE USER TABLE
server.delete('/users/:id', (req,res) => {
    const {id} = req.params;
    db('users')
    .where({id})
    .del()
    .then(note => {
        res.status(200).json(note);
    })
    .catch(err => {
        res.status(500).json({error:'database cannot delete information'});
    })
})

server.get('/createcouple', (req, res)=>{
    
})

module.exports = server; 