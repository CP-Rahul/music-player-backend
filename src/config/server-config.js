const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT: process.env.SALT,
    JWTEXPIRY: process.env.JWTEXPIRY,
    JWTSECRET: process.env.JWTSECRET,
    MONGOURL: process.env.MONGOURL,
    ORIGIN: process.env.ORIGIN
}