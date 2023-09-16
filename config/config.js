const Joi = require("joi");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "../.env") });

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(8000),
    DB_URL: Joi.string().required(),
    APP_MODE: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error)
  throw new Error(`Environment vars validation error: ${error.message}`);

module.exports = {
  port: envVars.PORT,
  mongoose: {
    url: envVars.DB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  version: {
    appMode: envVars.APP_MODE,
  },
};
