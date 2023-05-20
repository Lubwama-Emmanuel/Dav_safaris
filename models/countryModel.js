const mongoose = require("mongoose");

// Model schema
const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
  },
  countryTitle: {
    type: String,
  },
  summary: {
    type: String,
  },
  slug: {
    type: String,
  },
  specialist: {
    type: String,
  },
});

module.exports = mongoose.model("Country", countrySchema);
