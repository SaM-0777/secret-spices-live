import express from "express";

import { getAuthorDetailsByUserId } from "../../controllers/ownerController/author.js";


const AuthorOwnerRouter = express.Router();


/**
 * Method   Desc
 * GET      Get Author Details by userId
 */
AuthorOwnerRouter.get('/details/:userId', getAuthorDetailsByUserId);




export default AuthorOwnerRouter;

