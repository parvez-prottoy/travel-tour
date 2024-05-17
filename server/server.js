const app = require("./app");
const PORT = require("./config/config").app.port;
const chalk = require("chalk");

// ? Server Listen
app.listen(PORT, () => {
  console.log(
    chalk.bgGreen.black(`Server is running on http://localhost:${PORT}`)
  );
});
