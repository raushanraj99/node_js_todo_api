const express = require("express");

const {
   
   register,
   login,
   getMyProfile,
   logout,
} = require("../controllers/users.js");
const {isAuthenticated} = require("../middlewares/auth.js");

const router = express.Router();

// router.get("/all", getAllusers);

router.post("/new", register);
router.post("/login",login);
router.get("/logout",logout);

router.get("/me", isAuthenticated, getMyProfile)

// router.get('/userid/:id',getUserDetail);
// router.put('/userid/:id',updateUser); // Not working
// router.delete('/userid/:id',deleteUser);

module.exports = router;
