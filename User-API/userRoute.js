const express = require("express");

const router = express.Router();
const{getAllUsers,getUserByName, getNewUsers} = require("./UserController");
const { $where } = require("./UserModels");
router.post("/",getNewUsers);

router.get("/", getAllUsers);

router.get("/:Name",getUserByName);

router.get("/user/:Name", (req,res)=>{
    res.json("Hello! " + req.params.Name)
})

module.exports = router;