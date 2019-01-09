const express = require('express');
const server = express();
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(KnexConfig.development);
const faker = require('faker')



server.use(express.json())


server.post('/registration', (req,res)=>{
    
    const newUser = req.body;

    db.table('users').insert(newUser).then(user =>{
        res.status(200).json({message: 'User Successfully Registered'})
    }).catch(err => {
        res.status(500).json({message: "An error occured while processing data."})
    })

})


server.get('/users', async (req, res) => {

    try{
        const users = await db('users');
        if(users){
            res.status(200).json(users)
        }

    }

    catch(err){
        res.status(500).json({message: 'An error occured while retrieving the data.'})
    }
});


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

module.exports = server