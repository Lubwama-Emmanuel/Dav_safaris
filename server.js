const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => console.log("DATABASE CONNECTED SUCCESSFULLY"))
  .catch((err) => console.log("Ooooop, DB not connected", err));

app.listen(port, () => {
  console.log(`---server running on port ${port}`);
});
