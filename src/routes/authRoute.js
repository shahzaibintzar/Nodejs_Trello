const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
const Auth = require("../models/authModel");
const { handleLogin, handleSignUp, handleUpdateProfile, handleResetPassword, handleDeleteAccount, handleProtected, handleLogout } = require("../controllers/auth");

router.post("/register", handleSignUp);


router.put("/updateProfile", handleUpdateProfile);


router.put("/resetPassword", handleResetPassword);


router.delete("/deleteAccount", handleDeleteAccount);

router.post("/login", handleLogin);

router.get("/protected", handleProtected);

router.post("/logout", handleLogout);

module.exports = router;