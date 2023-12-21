const Startup = require('../models/startup.model')

exports.getCards = async (req,res) =>{
    try {
        const startups = await Startup.find();
        res.json(startups);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getFilter = async (req, res) =>{
    const industry = req.params.industry;
    try {
      const startups = await Startup.find({ IndustryVertical: industry });
      res.json(startups);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};