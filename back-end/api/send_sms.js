// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Test from labs9-wedding-site',
     from: '+17573001509',
     to: process.env.MY_PHONE_NUMBER
   })
  .then(message => console.log(message.sid))
  .done();
