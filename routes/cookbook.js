import express from "express";

import {
    getAllCookbooks,
    getAllCookbooksByUserId,
    getCookbookByCookbookId,
    createNewCookbook,
    updateCookbook,
    deleteCookbook,
} from "../controllers/cookbook.js";


const cookbookRouter = express.Router(); 

/**
 * Method   Desc
 * GET      Get all cookbook
 */
cookbookRouter.get('/', getAllCookbooks);

/**
 * Method   Desc
 * GET      Get all cookbook for a user id
 */
cookbookRouter.get('/byuser/:userId', getAllCookbooksByUserId);

/**
 * Method   Desc
 * GET      Get a particular cookbook for a cookbook id
 */
cookbookRouter.get('/bycookbook/:cookbookId', getCookbookByCookbookId);

/**
 * Method   Desc
 * POST     To create a new cookbook
 */
cookbookRouter.post('/new', createNewCookbook);

/**
 * Method   Desc
 * PATCH    To update a particular cookbook for a cookbook id
 */
cookbookRouter.patch('/:cookbookId', updateCookbook);

/**
 * Method   Desc
 * DELETE   To delete a particular cookbook for a cookbook id
 */
cookbookRouter.delete('/:cookbookId', deleteCookbook);


export default cookbookRouter;

