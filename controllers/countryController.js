const Country = require("../models/countryModel");

exports.createCountry = async (req, res) => {
  try {
    const data = req.body;
    const newCountry = await Country.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: newCountry,
      },
    });
    console.log(data);
  } catch (err) {
    console.log("an error occured", err);
  }
};
