
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: String,
  value: String,
});

const DataModel = mongoose.model('Data', DataSchema);

module.exports = DataModel;