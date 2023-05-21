const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

router.post("/createCountry", countryController.createCountry);
router.get("/getAllCountries", countryController.getCoutries);
router.patch("/updateCountry/:id", countryController.updateCountry);
router.delete("/deleteCountry/:id", countryController.deleteCountry);

module.exports = router;
