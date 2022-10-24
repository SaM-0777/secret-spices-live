import express from "express";

import { getAllCookbooks, getAllCookbooksByUserId, getAllCookbooksByCookbookId, createNewCookbook, updateCookbook, deleteCookbook } from "../controllers/cookbook.js";


const cookbookRouter = express.Router(); 

/**
 * Method   Desc
 * GET      Get all cookbook
 */
cookbookRouter.get('/cookbook', getAllCookbooks);

/**
 * Method   Desc
 * GET      Get all cookbook for a user id
 */
cookbookRouter.get('/cookbook/:userId', getAllCookbooksByUserId);

/**
 * Method   Desc
 * GET      Get a particular cookbook for a cookbook id
 */
cookbookRouter.get('/cookbook/:cookbookId', getAllCookbooksByCookbookId);

/**
 * Method   Desc
 * POST     To create a new cookbook
 */
cookbookRouter.post('/cookbook/new', createNewCookbook);

/**
 * Method   Desc
 * PATCH    To update a particular cookbook for a cookbook id
 */
cookbookRouter.patch('/cookbook/:cookbookId', updateCookbook);

/**
 * Method   Desc
 * DELETE   To delete a particular cookbook for a cookbook id
 */
cookbookRouter.delete('/cookbook/:cookbookId', deleteCookbook);


export default cookbookRouter;

