// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.get("/users", userController.getData);
router.post("/createuser", userController.createData);
router.delete("/delete/:id", userController.deleteUser);
router.get("/getuserbyid/:id", userController.getUserById);
router.put("/updateuser/:id", userController.updateUser);

module.exports = router;
