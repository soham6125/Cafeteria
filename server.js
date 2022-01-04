const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;                 
app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})