const express = require('express')
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(process.env.DB_ENVIORNMENT ? KnexConfig[process.env.DB_ENVIORNMENT] : KnexConfig.development);
const router = express()


const getWeddingDetails = async (req, res) => {
    const weddingId = req.params.id

    try {
        const weddingDetails = await db('weddings').where({ id: weddingId })

        const couple = await db('user')
            .where({
                wedding_id: weddingId,
            })

        res.status(200).json({
            weddingDetails: weddingDetails[0], 
            couple: [couple[0], couple[1]]
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error, message: 'could not get wedding info'})
    }
}

router.get('/:id', getWeddingDetails)

module.exports = router