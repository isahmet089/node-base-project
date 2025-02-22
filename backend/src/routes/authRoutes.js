const express=require("express");
const router=express.Router();
const {loginContoller,registerController,logoutConroller}=require("../controller/authController")

router.post("/login",loginContoller);
router.post("/register",registerController);
router.post("/logout",logoutConroller);

module.exports= router;
