const express = require("express");
const { newTask, getMyTask, updateTask, deleteTask } = require("../controllers/task");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();


router.post("/new",isAuthenticated,newTask)

router.get("/my",isAuthenticated,getMyTask)

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)



module.exports = router