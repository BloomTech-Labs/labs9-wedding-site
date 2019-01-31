// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
require('dotenv').config();
const router = require("express").Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID || "not authorized";
const authToken = process.env.TWILIO_AUTH_TOKEN || "not authorized";
const twilioPhone = process.env.TWILIO_PHONE;
const contactPhone = process.env.MY_PHONE_NUMBER;
/* const client = require("twilio")(accountSid, authToken); */


router.get('/', (req, res) => {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("SMS fire attempt--twilio not authorized");
  } else {
    client.messages
      .create({
        body: `Test from labs9-wedding-site`,
        from: twilioPhone,
        to: contactPhone
      })
      .then(message => {
        console.log(message.sid);
      })
      .done();
    }
  })

module.exports = router;