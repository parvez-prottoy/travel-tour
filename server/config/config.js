require("dotenv").config("../.env");

const dev = {
  app: {
    port: process.env.PORT || 8080,
  },
  db: {
    url: process.env.MONGODB_URL || "mongodb://localhost:27017/Travel-Tour",
  },
};

module.exports = dev;
