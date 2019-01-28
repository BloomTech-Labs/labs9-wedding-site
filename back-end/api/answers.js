const express = require('express')
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(process.env.DB_ENVIORNMENT ? KnexConfig[process.env.DB_ENVIORNMENT] : KnexConfig.development);
const router = express()

const diffObjects = (target, newObj) => Object.entries(newObj).filter(guestProp => {
    // console.log(guestProp, user[guestProp[0]])
    return (target[guestProp[0]] === undefined || target[guestProp[0]] !== guestProp[1])
}).reduce((reducedObj, tuple) => {
    reducedObj[tuple[0]] = tuple[1]
    return reducedObj
}, {})

// A FUNCTION TO ADD GUESTS AND ANSWERS TO THE ANSWERS TABLE
// if the guest does not exist then add them.
// then add answers to the answers table
const addAnswers = async (req, res) => {
    // let { id } = req.params;
    // console.log(id)

    let { guestObj, answers, wedding_id } = req.body
    let message = ''

    try {
        let user = await db('users')
            .where('email', guestObj.email)

        user = user[0]
        // if users does not exists in database
        console.log('first user', user)
        if (user === undefined /*|| user.email !== guestObj.email */) {
            // add the user
            console.log('add user')
            try {
                const newUserId = await db('users')
                    .insert(guestObj)

                console.log('newUser', newUserId)
                message = 'You have been added to the rsvp list'

                // overwrite user obj with new newUser
                user = Object.assign({}, guestObj,
                    { id: newUserId[0] }
                )
            } catch (error) {
                console.log(error)
                message = 'can not add user'
                res.status(500).json(error)
            }
        } else { // updates user info
            console.log('update user')

            // find updated guest properties
            const diffGuestProps = Object.entries(guestObj).filter(guestProp => {
                // console.log(guestProp, user[guestProp[0]])
                return (user[guestProp[0]] === undefined || user[guestProp[0]] !== guestProp[1])
            }).reduce((reducedObj, tuple) => {
                reducedObj[tuple[0]] = tuple[1]
                return reducedObj
            }, {})
            console.log(diffGuestProps)

            // then update in db if different
            if (Object.keys(diffGuestProps).length > 0) {
                try {
                    const updated = await db('users')
                        .where('id', user.id)
                        .update(diffGuestProps)

                    console.log('updated', updated)
                    user = Object.assign({}, user, updated)
                } catch (error) {
                    console.log(error)
                    message = 'can not update user'
                    res.status(500).json(error)
                }
            }
        }

        console.log('user', user)
        let newAnswers;

        // map guest_id onto answer objects
        newAnswers = answers.map(
            answer => Object.assign({}, answer,
                { "guest_id": user['id'] }
            )
        )


        try {
            // add array of new answers to answers table
            const success = await db('answers').insert(newAnswers)
            message = 'Successfuly added answers';
            res.status(200).json({ success, message })
        } catch (error) {
            console.log(error)
            message = 'can not add answer'
            res.status(500).json({ error, message })
        }

    }
    catch (error) {
        message = 'can not find user'
        res.status(500).json({ error: error, message: message })
        console.log(error)
    }
}

router.post('/', addAnswers)

module.exports = router