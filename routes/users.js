const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/usercontroller");
router.get("/", (req, res) => {
    res.send("Welcome to API");
});
//ROUTES CREACTION
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser); 
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;