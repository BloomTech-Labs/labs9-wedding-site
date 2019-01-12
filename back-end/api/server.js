const express = require('express');
const cors = require('cors');
const server = express();
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(KnexConfig.development);
const faker = require('faker');

// restrict cors access to our netlify
const corsOptions = {
    origin: "https://sad-roentgen-8a7ea1.netlify.com"
  };

server.use(express.json());
server.use(cors(corsOptions));

server.get('/', (req, res)=>{
    res.send('Server Root.')
})


//RETURNS ALL USER DATA IN THE DATABASE
server.get('/users', async (req, res) => {

    try{
        
        const users = await db('users');
        if(users){
            res.status(200).json(users)
        }

    }

    catch(err){
        res.status(500).json({message: 'An error occured while retrieving the data.', err})
    }
});


//TAKES ENTERED USER INFORMATION AND SAVES THEM TO DATABASE; CURRENT ONLY ACCEPTS OBJECTS FORMATTED AS FOLLOWS: {firstname: 'data', lastname: 'data'}
server.post('/registration', (req,res)=>{
    
    const newUser = req.body;

    db.table('users').insert(newUser).then(user =>{
        res.status(200).json({message: 'User Successfully Registered'})
    }).catch(err => {
        res.status(500).json({message: "An error occured while processing data."})
    })

})


//A FUNCTION TO POPULATE THE DATABASE WITH DUMMY DATA
server.get('/dummydata', async (req, res) => {
    let newUser = {firstname: faker.name.firstName(), lastname: faker.name.lastName()}
    
    

    try{
        
        const users = await db.table('users').insert(newUser)
        
        if(users){
            res.status(200).json(users)
        }

    }

    catch(err){
        res.status(500).json({message: 'An error occured while retrieving the data.'})
    }
});


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

module.exports = server