const express = require('express')
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(KnexConfig.development);
const router = express()


const getWeddingId = async (req, res) => {
  try {
    const { id } = req.params
    const weddingId = await db('wedding').where({id: id})

    res.status(200).json({weddingId})
  } catch(err) {
    res.status(500).json({ 
      message: 'Wedding id does not exist in db', 
      error: err
    })
  }
}

router.get('/:id')


module.exports = router