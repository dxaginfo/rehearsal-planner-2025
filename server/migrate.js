// Example of a db migration file
const {Client} = require('pg');
require('dotenv').config();
const client = new Client();
async function migrate(){
  await client.connect();
  await client.query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password_hash VARCHAR(100),
    role VARCHAR(30),
    created_at TIMESTAMP DEFAULT NOW()
  )`);
  await client.end();
  console.log('Migration complete');
}
migrate();