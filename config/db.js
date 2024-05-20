const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sajilo-donation')
  .then(() => console.log('Connected!'));