const express = require("express");

const cors = require("cors");

// Import the database connection
require("./config/db");

// Import the router
const router = require("./routes/router");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("backend is running");
});

// server start on port 3000
app.listen(3000, () => {
  console.log(`Server is running on 3000 port`);
});
