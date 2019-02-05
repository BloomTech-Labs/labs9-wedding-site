const express = require('express')
const knex = require('knex');
const KnexConfig = require('../knexfile');
const db = knex(process.env.DB_ENVIORNMENT ? KnexConfig[process.env.DB_ENVIORNMENT] : KnexConfig.development);
const router = express()

const { diffObjects } = require('../../front-end/src/universal/helperFunctions')

// A FUNCTION TO ADD GUESTS AND ANSWERS TO THE GUEST AND ANSWERS TABLE RESPECTIVLY
// if the guest does not exist then add them.
// then add answers to the answers table
const addAnswers = async (req, res) => {
    // let { id } = req.params;
    // console.log(id)

    let { userObj, guestObj, answers, wedding_id } = req.body
    let message = ''
    console.log(userObj, guestObj, answers, wedding_id)

    
    try {
        let user = await db('user')
            .where('email', userObj.email)

        user = user[0]
        console.log('Is user in db?', user ? 'Yes.' : 'No')

        // if users does not exists in database
        
        if (!user) {
            // add the user
            console.log('add user')
            try {
                console.log('userObj', userObj)
                
                const newUserId = await db('user').insert(userObj)
                userObj.id = newUserId[0]
                console.log('newUser', newUserId)

                guestObj["guest_id"] = newUserId;

                const newGuestId = await db('guests').insert(guestObj)
                guestObj.id = newGuestId
                console.log('new guest table id', newGuestId)

                // overwrite user obj with new newUser
                user = Object.assign({}, userObj,
                    { id: newUserId[0] }
                )
                console.log('new user', user)
            } 
            catch (error) {
                console.log(error)
                res.status(500).json({error, message: 'can not add user'})
            }
        } 
        else { 
            // updates user info
            console.log('update user')

            // find updated user properties
            const diffUserProps = diffObjects(userObj, user)
            console.log(diffUserProps)
            // then update in db if different
            if (Object.keys(diffUserProps).length > 0) {
                try {
                    const updated = await db('user')
                        .where('id', user.id)
                        .update(diffUserProps)

                    // console.log('updated', updated)
                    user = Object.assign(user, updated)
                    
                    console.log('updated user', updated)
                    console.log('user object', user)

                    // get guest record out of db
                    let oldGuestObj = await db('guests').where({'guest_id': user.id})
                    oldGuestObj = oldGuestObj[0]
                    console.log('oldGuestObj', oldGuestObj)
                    const diffGuestProps = diffObjects(oldGuestObj, guestObj)
                    if (Object.keys(diffGuestProps).length > 0) {
                        const updatedGuest = await db('guests')
                            .where({'guest_id': user.id})
                            .update(diffGuestProps)
                        console.log('guest updated', updatedGuest)
                    }
                } 
                catch (error) {
                    console.log(error)
                    res.status(500).json({error, message: 'can not update user'})
                }
            }
        }

        try {
            // map guest_id onto answer objects
            let newAnswers = answers.map(
                answer => Object.assign({}, answer,
                    { "guest_id": user['id'] }
                )
            )

            // add array of new answers to answers table
            setTimeout(()=>(0), 300)
            const success = await db('answers').insert(newAnswers)
            message = 'Successfuly added answers';
            res.status(200).json({ success, message })
        } 
        catch (error) {
            console.log(error)
            res.status(500).json({ error, message: 'can not add answer' })
        }

    }
    catch (error) {
        res.status(500).json({ error, message: 'can not find user'})
        console.log(error, message)
    }
}

router.post('/', addAnswers)

module.exports = router