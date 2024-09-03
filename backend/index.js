// Code  for mongoose config in backend


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/faculty_crawl2', {

});

// Define a simple schema and model
const DataSchema = new mongoose.Schema({
  url: String,
  html: String,
});

const DataModel = mongoose.model('Data', DataSchema);

// Define a route to get data
app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log('cannot get data!!!');
  }
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

