const express = require("express");
const app = express();
const userRouter =require("./routes/userRoutes")

app.use(express.json())


// ROUTES
app.use("/api/users",userRouter)
module.exports = app; 