const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_25xoex",
  password: "gZFHrWH47IJg13oN",
  database: "lab_blank01_253ihhl",
});

connection.connect(() => {
  console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 4000;

// Enable CORS for requests from http://localhost:5173
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// Register endpoints
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.post("/login", require("./routes/login"));
app.post("/register", require("./routes/register"));
app.get("/check", require("./routes/check"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});