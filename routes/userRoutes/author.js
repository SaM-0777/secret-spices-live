import express from "express";

import { getAllAuthors, getAuthorsDisplay, getAuthorDetailsByAuthorId, createAuthor, updateAuthor } from "../../controllers/author.js";



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
AuthorRouter.get('/details/:authorId', getAuthorDetailsByAuthorId);

/**
 * Method   Desc
 * POST     Create new Author
 */
AuthorRouter.post('/create/new', createAuthor);

/**
 * Method   Desc
 * PATCH     Update an Author
 */
AuthorRouter.patch('/update/:authorId', updateAuthor);



export default AuthorRouter;

