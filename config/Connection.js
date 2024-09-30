///mongose
import mongoose from "mongoose";
const connectDB=async(DATABASE_URL)=>{
try{
const DB_OPTIONS={
    dbname:process.env.DATABASE_NAME,
}
await mongoose.connect(DATABASE_URL,DB_OPTIONS)
console.log('connection done');
}
catch(error){
    console.log(error);
    
}
}
export default connectDB;