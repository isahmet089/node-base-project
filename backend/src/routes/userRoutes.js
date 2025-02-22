const express=require("express");
const router=express.Router();
const {userGetContoroller, userCreateController ,userUpdeteControler, userDeleteConroller}=require("../controller/userController");

router.get("/", userGetContoroller);
router.post("/",userCreateController);
router.put("/:id",userUpdeteControler);
router.delete("/:id",userDeleteConroller);


module.exports=router;