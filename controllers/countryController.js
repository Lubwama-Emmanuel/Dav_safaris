const Country = require("../models/countryModel");

// Endpoint for creating country
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
    res.status(400).json({
      status: "failure",
      data: {
        message: `An error occurred: ${err}`,
      },
    });
    console.log("an error occurred", err);
  }
};

exports.getCoutries = async (req, res) => {
  try {
    const countries = await Country.find();

    res.status(200).json({
      status: "success",
      data: {
        data: countries,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: {
        message: `An error occurred: ${err}`,
      },
    });
    console.log("an error occurred", err);
  }
};

exports.updateCountry = async (req, res) => {
  try {
    const updatedData = await Country.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(req.body);
    console.log(updatedData);

    res.status(200).json({
      status: "success",
      data: {
        data: updatedData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: {
        message: `An error occurred: ${err}`,
      },
    });
    console.log("an error occurred", err);
  }
};

exports.deleteCountry = async (req, res) => {
  try {
    console.log(req.params.id);
    await Country.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "country deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: {
        message: `An error occurred: ${err}`,
      },
    });
    console.log("an error occurred", err);
  }
};
