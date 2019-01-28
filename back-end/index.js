require('dotenv').config();
const server = require('./api/server');
const PORT = process.env.PORT || 8888;
server.listen(PORT, () => console.log(
    `Server is running on Port ${PORT}`
))