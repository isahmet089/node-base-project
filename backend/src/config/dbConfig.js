const mongoose=require("mongoose");

const connectDB=async()=>{
try {
    const conn= await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mango db bağlanıtısı başarılı :${conn.connection.host}`)
} catch (error) {
    console.log(`Mango db bağlanıtısı başasrısız oldu ${error}`);
}
};
module.exports =connectDB;