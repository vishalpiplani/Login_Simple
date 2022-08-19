const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  createAdmin,
  login,
  getUsers
} = require("../controller/users/user.controller");

router.get("/users/", getUsers);
router.post("/login", login);
router.post("/create/user", createUser);
router.post("/create/admin", createAdmin);



module.exports = router;   
   