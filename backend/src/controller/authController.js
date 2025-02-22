
const { json } = require("express");
const User = require("../models/User");

const loginContoller= async (req,res)=>{
    let {email,password,name}=req.body;
    try {
        const userEmail = await User.findOne({email});
        if (!userEmail) {
            return res.json({message:"Email yada şifre yanlış."});
        }
        const user =await User.findOne({email,password});
        if (!user) {
            return res.json({message:"şifre yanlış."});
        };

        //RESPONSADAN ÇIKAR
        const userResponse= user.toObject();
        delete userResponse.password;

        res.status(200).json({userResponse,message:"Giriş başarılı"});
    } catch (error) {
        res.status(500).json({error:message.error})
    }
};
const registerController= async(req,res)=>{
    try {   
        const sameEmail = await User.findOne({email: req.body.email});
        if (sameEmail) {
            return res.json({message : "Bu email zaten kayıtlı."})
        }
        const registerUser = new User({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
        });
        await registerUser.save()
        res.status(200).json(registerUser);
    } catch (error) {
        res.status(400).json({error:message.error});
    }
};
const logoutConroller=async (req,res)=>{

};

module.exports={
    loginContoller,
    registerController,
    logoutConroller,
};