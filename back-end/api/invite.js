const express = require('express')
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(process.env.DB_ENVIORNMENT ? KnexConfig[process.env.DB_ENVIORNMENT] : KnexConfig.development);
const router = express()


const addAnswers = async (req, res) => {
    const weddingId = req.params.id

    try {
        const weddingInfo = await db('weddings').where({ id: weddingId })
        console.log('weddingInfo', weddingInfo)


        const couple = await db('users')
            .where({ 
                wedding_id: weddingId,
                guest: false
                })
        console.log('couple', couple)

        res.status(200).json({weddingInfo, couple})
    } catch (error) {
        console.log(error)
        res.status(500).json({error, message: 'could not get wedding info'})
    }
}

router.get('/:id', addAnswers)

module.exports = router