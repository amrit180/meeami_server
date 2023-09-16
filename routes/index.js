const router = require("express").Router();
const applicationRoute = require("./application.routes");

const routes = [
  {
    path: "/application",
    route: applicationRoute,
  },
];
routes.forEach((obj) => {
  router.use(obj.path, obj.route);
});

module.exports = router;
