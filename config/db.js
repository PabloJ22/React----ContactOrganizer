const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB =  async () => {
  try {
    await mongoose
    .connect(db, {
      userNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Conneccted...')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB; 