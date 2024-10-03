// Contain the business logic for handling requests and generating responses.
//  They perform tasks like querying the database, processing data, and returning responses to the client.
import userModel from "../Models/User.js";
export default class UserController{
    static userRegistration=async(req,res)=>{
// console.log(req.body);
const {username,userpass}=req.body;
// console.log(username);
// console.log(userpass);
try{
const document=new userModel({
    username:username,
    userpass:userpass
})
await document.save();//wait untill the data not saved
// console.log('data saved into the database');
res.status(201).send({status:'SUCCESS',message:'data registerd successfully'});
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

        res.send('here i will write update code');
        
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

}