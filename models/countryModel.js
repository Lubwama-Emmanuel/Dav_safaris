const mongoose = require("mongoose");

// Model schema
const countrySchema = new mongoose.Schema({
  country_name: {
    type: String,
  },
  country_title: {
    type: String,
  },
  summary: {
    type: String,
  },
  slug: {
    type: String,
  },
  specilalist: {
    type: String,
  },
});

module.exports = mongoose.model("Country", countrySchema);
