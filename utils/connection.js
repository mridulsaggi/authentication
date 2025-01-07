import mongoose from "mongoose";
const connection=()=>{
    mongoose.connect(process.env.databaseurl,{
        dbName:"authentication"
    }).then(()=>{
        console.log("connected to database successfully");
    }).catch((err)=>{
        console.log("connection failed",err);
    })
}
export default connection;
