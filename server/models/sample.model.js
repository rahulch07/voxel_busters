const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
  
  text: { type: String }
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
