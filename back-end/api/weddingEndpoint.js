const express = require('express')
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(KnexConfig.testing);
const router = express()



const getWedding = async (req, res) => {
  try {
    const { id } = req.params
    // get wedding data
    const weddingId = await db('weddings').where('id', id)

    console.log(weddingId)
    // if wedding exists
    if(weddingId.length >= 1) {
      // send it out
      res.status(200).json({
        weddingId
      })
    } else {
      throw new Error('Wedding does not exist in database');
    }
  } catch(err) {
    res.status(500).json({ 
      message: 'Wedding id does not exist in db', 
      error: err
    })
  }
}

router.get('/:id', getWedding)

module.exports = router