// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Startup = require('./models/startup.model');
const Sample =require('./models/sample.model');

const app = express();
const PORT = process.env.PORT || 5000;
//const userx='';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://user1:135792468@cluster0.keoo882.mongodb.net/voxel_busters?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;




// Event handling for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
  console.log("Hi");
});

// Event handling for connection errors
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Event handling for disconnection
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

app.get('/' ,(req, res) =>{
    res.send("Hello World");
});

app.get('/api/startups', async (req, res) => {
  try {
    const startups = await Startup.find();
    //console.log(startups);
    res.json(startups);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.get('/api/sample', async (req, res) => {
    try {
      const sample1 = await Sample.find();
      console.log(sample1);
      res.json(sample1);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

  app.post('/api/startups', async (req, res) => {
    try {
      const newStartup = new Startup(req.body);
  
      const savedStartup = await newStartup.save();
      res.json(savedStartup);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const cardRoutes = require('./routes/card.routes');
// const config = require('./config/db.config');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(config.mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(()=>{
//     console.log('Conected');
//   })
//   .catch((error)=>{
//     console.error('Error in connectecting to DB', error.message);
//   });

//  console.log('Connected');

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://user1:135792468@cluster0.keoo882.mongodb.net/voxel_busters?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const startupSchema = new mongoose.Schema({
//   // Define your schema based on MongoDB fields
//   SNo: String,
//   Date: String,
//   StartupName: String,
//   IndustryVertical: String,
//   SubVertical: String,
//   CityLocation: String,
//   InvestorsName: String,
//   InvestmentType: String,
//   AmountInUSD: String,
//   Remarks: String,
// });

// const Startup = mongoose.model('Startup', startupSchema);

// Define your APIs here
// Add this after mongoose model definition

// Fetch all startups
// app.get('/startups', async (req, res) => {
//     try {
//       const startups = await Startup.find();
//       res.json(startups);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
//   // Fetch startups based on Industry Vertical
//   app.get('/startups/:industry', async (req, res) => {
//     const industry = req.params.industry;
//     try {
//       const startups = await Startup.find({ IndustryVertical: industry });
//       res.json(startups);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// app.get('/', (req, res)=>{
//     res.send("Hello, This is Home page.")
// })

// app.use('/startups',cardRoutes);
  

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
