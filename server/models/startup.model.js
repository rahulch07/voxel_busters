// models/startup.js
const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  
  SNo: String,
  Date: String,
  StartupName: String,
  IndustryVertical: String,
  SubVertical: String,
  CityLocation: String,
  InvestorsName: String,
  InvestmentType: String,
  AmountInUSD: String,
  Remarks: String,
});

const Startup = mongoose.model('Startup', startupSchema);

module.exports = Startup;


