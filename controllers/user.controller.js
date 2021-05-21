const userMiddleware = require("../middlewares/user.middleware.js");

module.exports = (route) => {

  route.get("/", userMiddleware.getUsers);

  route.post('/',userMiddleware.addUser);

  route.delete('/:id',userMiddleware.deleteUser);

}