require("dotenv").config();
const convict = require("convict");

const config = convict({
  env: {
    doc: "Current application environment",
    format: ["dev", "test", "prod"],
    default: "dev",
    arg: "nodeEnv",
    env: "NODE_ENV"
  },
  mongoUri: {
    doc: "MongoDB URI",
    format: String,
    default: "",
    arg: "mongo-uri",
    env: "MONGO_URI"
  }
});

const env = config.get("env");
config.loadFile(`./config/${env}.env.json`);

config.validate({ allowed: "strict" }); // throws error if config does not conform to schema

module.exports = config.getProperties(); // so we can operate with a plain old JavaScript object and abstract away convict (optional)
