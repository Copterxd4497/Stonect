const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routers/userRoutes");
const app = express();

// Middleware
app.use(morgan("dev")); // Logs requests
app.use(express.json()); // Parses incoming JSON data
app.use(express.static(`${__dirname}/public`)); // Serves static files

app.use((req, res, next) => {
  console.log("Hello from the Middleware😀😀😀");
  next();
});

//mounting mutiple routers
app.use("/api/v1/users", userRouter);

module.exports = app;
