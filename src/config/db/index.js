const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/node-js');
    console.log('Connect to MongoDB successfully !!!');
  } catch (error) {
    console.error('Connect to MongoDB failed !!!');
  }
}

module.exports = { connect };
