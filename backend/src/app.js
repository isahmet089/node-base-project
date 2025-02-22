const express = require("express");
const app = express();
const userRouter =require("./routes/userRoutes");
const authRouter =require("./routes/authRoutes");

//Middilwares
app.use(express.json());


// ROUTES
app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);



module.exports = app; 