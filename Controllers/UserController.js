// Contain the business logic for handling requests and generating responses.
//  They perform tasks like querying the database, processing data, and returning responses to the client.
import userModel from "../Models/User.js";
export default class UserController{
    static userRegistration=async(req,res)=>{

        res.send('here i will write insertion code');
        
    }
    static userfetch=async(req,res)=>{

        res.send('here i will write fetch code');
        
    }
    static userupdate=async(req,res)=>{

        res.send('here i will write update code');
        
    }
    static userDelete=async(req,res)=>{

        res.send('here i will write delete code');
        
    }

}