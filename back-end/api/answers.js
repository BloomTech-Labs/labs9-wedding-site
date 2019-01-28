const express = require('express')
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(KnexConfig.development);
const router = express()


// A FUNCTION TO ADD GUESTS AND ANSWERS TO THE ANSWERS TABLE
// if the guest does not exist then add them.
// then add answers to the answers table
const addAnswers = (req, res) => {
  // let { id } = req.params;
  // console.log(id)
  let { guestObj, answers, wedding_id } = req.body
  let message = ''
  db('users')
      .where('email', guestObj.email)
      .then(user => {
      // if users does not exists in database
      if (user.length < 1 
          || user[0].email !== guestObj.email) {
          // add the user
          db('users')
              .insert(guestObj)
              .then(success => {
              message = 'You have been added to the rsvp list'

              // add new record id to guestObj
              guestObj = Object.assign({}, 
                  guestObj, 
                  {guest_id: success[0]}
              )
              // overwrite user obj with new guestObj
              user = Object.assign({}, guestObj, 
                  {id: success[0]}
              )
          }).catch(error => {
              console.log(error)
              message = 'can not add user'
              res.status(500).json(error)
           })
      }

      // map guest_id onto answer objects
      const newAnswers = answers.map(
          answer => Object.assign({}, answer, 
              {"guest_id": user[0]['id']}
          )
      )

      // add array of new answers to answers table
      db('answers').insert(newAnswers).then(success => {
          message = 'Successfuly added answers';
          res.status(200).json({success, message})
      }).catch(error => {
          console.log(error)
          message = 'can not add answer'
          res.status(500).json({error, message})
      })
  })
  .catch(error => {
      message = 'can not find user'
      res.status(500).json({error: error, message: message})
      console.log(error)
  })
}

router.post('/', addAnswers)

module.exports = router