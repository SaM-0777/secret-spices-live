import express from "express";

import isValidObject from "../middlewares/cookbook/isValidObject.js";


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
cookbookRouter.patch('/:cookbookId', isValidObject, updateCookbook);

/**
 * Method   Desc
 * DELETE   To delete a particular cookbook for a cookbook id
 */
cookbookRouter.delete('/:cookbookId', isValidObject, deleteCookbook);


export default cookbookRouter;

