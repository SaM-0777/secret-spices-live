import express from "express";

import { getAuthorDetailsByUserId, getCurrentAuthenticatedUser } from "../../controllers/ownerController/author.js";


const AuthorOwnerRouter = express.Router();


/**
 * Method   Desc
 * GET      Get Current Authenticated User by userId
 */
AuthorOwnerRouter.get('/:userId', getCurrentAuthenticatedUser);


/**
 * Method   Desc
 * GET      Get Author Details by userId
 */
AuthorOwnerRouter.get('/details/:userId', getAuthorDetailsByUserId);




export default AuthorOwnerRouter;

