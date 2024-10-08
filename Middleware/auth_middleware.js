//verify the token:--
import jwt from 'jsonwebtoken';
import userModel from '../Models/User.js';
const checkUserAuth=async(req,res,next)=>{

    let token;
    const {authorization}=req.headers;
    console.log(authorization);
    if(authorization &&authorization.startsWith("Bearer")){
try{
token=authorization.split(' ')[1];
// console.log('hello',token);
// verify token
const {userID}=jwt.verify(token,process.env.JWT_SECRET_KEY);
console.log(userID);//id
//get the user:--
req.user=await userModel.findById(userID).select('-userpass');
// console.log("he is trying to del",req.user);
next();

}
catch(error){
res.status(401).send({status:'failed',message:'unauthorized user'});
}
    }
    else{
        res.status(401).send({status:'failed',message:'unauthorized user please provide authentication'});   
    }
    
}
export default checkUserAuth;