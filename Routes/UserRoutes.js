//Routers: Handle the routing of HTTP requests to the appropriate controller functions. They define the endpoints and HTTP methods (GET, POST, PUT, DELETE) for your application.
import express from 'express';
const router=express.Router();
import UserController from '../Controllers/UserController.js';
import checkUserAuth from '../Middleware/auth_middleware.js';
router.post('/',UserController.userRegistration);
router.get('/',UserController.userfetch);
router.put('/',UserController.userupdate);
router.delete('/',checkUserAuth,UserController.userDelete);

router.post('/login',UserController.userLogin);
export default router;

