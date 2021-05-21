require('dotenv').config();

const PORT = 3001 || process.env.PORT;
const URL = process.env.MONGODB_URL

const config = {
  PORT,
  URL
}

module.exports = config;