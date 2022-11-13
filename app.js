const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

const tourRoute = require("./routes/tour.route");

//root route
app.get("/", (req, res) => {
  res.send("Route is Working!");
});

//tour routes here
app.use("/api/v1/tour", tourRoute);

module.exports = app;
