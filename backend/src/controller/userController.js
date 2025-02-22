
const User =require("../models/User")

const userGetContoroller= async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: error});
    };
};
const userCreateController= async(req,res)=>{
    let newUser =req.body;
    try {
        const createUser=await User.create(newUser);
        res.status(200).json(createUser);
    } catch (error) {
        res.status(404).json({message:error.message})
    };
};
const userUpdeteControler= async (req,res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,  // Get ID from URL
            req.body,       // Get new data from request body
            { new: true }   // Return updated document
          );
         if(!updatedUser){
            return res.status(404).json({message:"User not found"});
         }
         res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const userDeleteConroller= async(req,res)=>{
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        if(!deleteUser){
            res.status(404).json({message:"User not Found"});
        };
        res.status(200).json(deleteUser,"silindi");
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports={
    userGetContoroller,
    userCreateController,
    userUpdeteControler,
    userDeleteConroller,

};