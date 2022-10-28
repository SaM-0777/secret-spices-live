import express from "express";

import { getAllAuthors, getAuthorsDisplay, getAuthorDetailsByAuthorId } from "../../controllers/author.js";



const AuthorRouter = express.Router();

/**
 * Method   Desc
 * GET      Get all Author
 */
AuthorRouter.get('/all', getAllAuthors);

/**
 * Method   Desc
 * GET      Get all Author Display
 */
AuthorRouter.get('/display/all', getAuthorsDisplay);

/**
 * Method   Desc
 * GET      Get all Author Display
 */
AuthorRouter.get('/details', getAuthorDetailsByAuthorId);


export default AuthorRouter;

