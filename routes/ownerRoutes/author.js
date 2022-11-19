import express from "express";

import { getAuthorDetailsByUserId, getCurrentAuthenticatedUser, getAuthorAccountById } from "../../controllers/ownerController/author.js";


const AuthorOwnerRouter = express.Router();


/**
 * Method   Desc
 * GET      Get Current Authenticated User by userId
 */
// verify aws-cognito-pem-jwt
AuthorOwnerRouter.get('/:userId', getCurrentAuthenticatedUser);


/**
 * Method   Desc
 * GET      Get Author-Account Details by authorId
 */
AuthorOwnerRouter.get('/account/:authorId', getAuthorAccountById);


/**
 * Method   Desc
 * GET      Get Author Details by userId
 */
AuthorOwnerRouter.get('/details/:userId', getAuthorDetailsByUserId);




export default AuthorOwnerRouter;

