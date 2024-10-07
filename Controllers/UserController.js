// Contain the business logic for handling requests and generating responses.
//  They perform tasks like querying the database, processing data, and returning responses to the client.
import userModel from "../Models/User.js";
import bcrypt from 'bcrypt';
export default class UserController{
    static userRegistration=async(req,res)=>{
// console.log(req.body);
try{
const {username,userpass}=req.body;

const salt=bcrypt.genSaltSync(12);
const hashpassword=bcrypt.hashSync(userpass,salt);

const document=new userModel({
    username:username,
    userpass:hashpassword
})
await document.save();//wait untill the data not saved
// console.log('data saved into the database');
res.status(201).send({status:'SUCCESS',message:'data registerd successfully'});

// console.log(username);
// console.log(hashpassword);
    }
catch(error){
    // console.log(error);
    res.status(500).send({status:'Failure',message:'data not saved',err:error});
}




        // res.send('here i will write insertion code');
        
    }
    static userfetch=async(req,res)=>{

        try{
const Data=await userModel.find();
res.status(200).send({status:'SUCCESS',message:'data received successfully',data:Data});
        }
        catch(error){
            res.status(500).send({status:'Failure',message:'data not fetched',err:error});   
        }
        // res.send('here i will write fetch code');
        
    }
    static userupdate=async(req,res)=>{
        try{
        const {username,userpass}=req.body;
        const salt=bcrypt.genSaltSync(12);
const hashpassword=bcrypt.hashSync(userpass,salt); 
        await userModel.findOneAndUpdate({username:username},{$set:{userpass:hashpassword}});

res.status(200).send({status:'SUCCESS',message:'data updated successfully'});
        
    }
    catch(error){
        res.status(500).send({status:'Failure',message:'data not updated',err:error});   
    }
        

        
        
      
        
    }
    static userDelete=async(req,res)=>{
const {username}=req.body;
        try{
            await userModel.deleteOne({username:username});
            res.status(200).send({status:'SUCCESS',message:'data deleted successfully'});
                    }
                    catch(error){
                        res.status(500).send({status:'Failure',message:'data not deleted',err:error});   
                    }
        
    }
    static userLogin=async(req,res)=>{
        try{
const {username,userpass}=req.body;
if(username &&userpass){
const user=await userModel.findOne({username:username});
if(user!=null){
const ismatchespass=await bcrypt.compare(userpass,user.userpass);
if(user.username===username &&ismatchespass){
res.status(200).send({status:true,message:'user succefully login'});
}
else{
    res.status(401).send({status:'failed',message:'username or password not match'});   
}
}
else{
    res.status(401).send({status:'failed',message:'username doesnt match'}); 
}


}
else{
    res.status(401).send({status:'failed',message:'all field are required'});
}
        }
        catch(error){
            res.status(500).send({status:'Failure',message:'not login',err:error}); 
        }
    }

}