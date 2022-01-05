const express = require('express');
const { fstat, readFileSync } = require('fs');
const path = require( 'path' );
const cors = require( 'cors' );

const app = express();
app.use(cors());
const data = JSON.parse(readFileSync(path.resolve('./db.json'), 'utf-8'));
const PORT = process.env.PORT || 3001;                 
app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.get('/data', (req, res) => {
  return res.json(data);
})
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})