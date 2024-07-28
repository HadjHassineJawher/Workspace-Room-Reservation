const app = require("./src/app");
const config = require("./src/config/env.config");
const connectDB = require('./src/config/database.config');

connectDB();

app.listen(config.port, () => {
  console.log(
    `Server is running in ${config.nodeEnv} mode on port ${config.port}`
  );
});
