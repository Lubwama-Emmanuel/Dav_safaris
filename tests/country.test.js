const mongoose = require("mongoose");
const request = require("supertest");
const dotenv = require("dotenv");
const app = require("../app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

// Connecting to database before each test
beforeEach(async () => {
  await mongoose.connect(DB);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET all countrys", () => {
  it("should return all countries", async () => {
    const res = await request(app).get("/country/getAllCountries");
    expect(res.statusCode).toBe(200);
    // expect(res.body.length).toBeGreaterThan(0);
  });
});
