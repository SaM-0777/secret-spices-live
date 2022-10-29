import express from "express";

import { getAllCookbooks, getCookbooksDisplay, createCookbook, updateCookbook } from "../../controllers/cookbook.js";


const CookbookRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Cookbooks
 */
CookbookRouter.get('/all', getAllCookbooks);

/**
 * Method   Desc
 * GET      Get all Cookbooks
 */
CookbookRouter.get('/display/all', getCookbooksDisplay);


/**
 * Method   Desc
 * POST     Create a cookbook
 */
CookbookRouter.post('/create/new', createCookbook);


/**
 * Method   Desc
 * PATCH    Update a cookbook
 */
CookbookRouter.patch('/update/:cookbookId', updateCookbook);


export default CookbookRouter;

