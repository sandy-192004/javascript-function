const express = require("express");

const router = express.Router();
const{getAllUsers,getUserByName, getNewUsers} = require("./UserController");
const { $where } = require("./UserModels");
const checkRole = require("../middleware/checkRole");
router.post("/",getNewUsers);

router.get("/", getAllUsers);

router.get("/:Name",getUserByName);
router.delete("/:role/:Name",deleteUsers);

router.get("/user/:Name", (req,res)=>{
    res.json("Hello! " + req.params.Name)
})




router.delete("/users/:id", checkRole("admin"), async (req, res) => {
  try {
    const userId = req.params.id;
  
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



module.exports = router;