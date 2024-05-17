const express = require("express");
const app = new express();
const { notFoundHandler, errorHandler } = require("./src/utils/error");
const baseRoute = require("./src/routes/base.route");

// ? connected mongoDB
const connectDB = require("./config/db").apply();

// ? import middleware
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const path = require("path");
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });

// ! used middleware
app.use([
  morgan("dev"),
  cors(),
  cookieParser(),
  helmet(),
  hpp(),
  express.json({ limit: "50mb" }),
  express.urlencoded({ limit: "50mb" }),
  limiter,
]);
app.set("etag", false);

// ? Routes
app.use("/", baseRoute);

// ? Add React Front End Routing
app.use(express.static("../client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// ? error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
