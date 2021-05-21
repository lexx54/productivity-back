const userRoute = require("express").Router();

require("../controllers/user.controller")(userRoute);

module.exports = userRoute;