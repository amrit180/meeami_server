const express = require("express");
const app = express();
const cors = require("cors");

const morgan = require("morgan");
const config = require("./config/config");

const router = require("./routes");

// mongoose.set("strictQuery", true);
// mongoose.connect(config.mongoose.url, config.mongoose.options);

// mongoose.connection.on("connected", function () {
//   console.log("Mongoose default connection open");
// });

// // If the connection throws an error
// mongoose.connection.on("error", function (err) {
//   console.log("Mongoose default connection error: " + err);
// });

// // When the connection is disconnected
// mongoose.connection.on("disconnected", function () {
//   console.log("Mongoose default connection disconnected");
// });

// // If the Node process ends, close the Mongoose connection
// process.on("SIGINT", function () {
//   mongoose.connection.close();
// });

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/${config.version.appMode}`, router);

app.use((err, req, res, next) => {
  const { statusCode = 400, message = "Something went wrong!" } = err;
  res.status(statusCode).json({ message, success: false });
});

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `URL not found(shyamras ${config.version.appMode} Server).`,
  });
});

const port = config.port || 8000;

app.listen(port, () => {
  console.log(`server listening over http on port ${port}`);
});
