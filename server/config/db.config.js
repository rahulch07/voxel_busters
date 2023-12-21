// backend/config/db.config.js
// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://user1:135792468@cluster0.keoo882.mongodb.net/voxel_busters?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //useCreateIndex: true,
// });
// console.log("Connected Sucessfully")

module.exports = {
  mongoURI:'mongodb+srv://user1:135792468@cluster0.keoo882.mongodb.net/voxel_busters?retryWrites=true&w=majority',
}

//const db = mongoose.connection;



// Event handling for successful connection
// db.on('connected', () => {
//   console.log('Connected to MongoDB');
//   console.log('Connected');
// });

// // Event handling for connection errors
// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// // Event handling for disconnection
// db.on('disconnected', () => {
//   console.log('Disconnected from MongoDB');
// });