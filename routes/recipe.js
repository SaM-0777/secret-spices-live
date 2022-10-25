import express from "express";

import {
    getAllRecipes,
    getAllRecipesByUserId,
    getAllRecipesByCookbookId,
    getAllRecipesByCollectionId,
    getRecipeByRecipeId,
    createNewRecipe,
    updateRecipe,
    deleteRecipe,
} from "../controllers/recipe.js";


const recipeRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all recipes
 */
recipeRouter.get('/', getAllRecipes);

/**
 * Method   Desc
 * GET      Get all recipe for a user id
 */
recipeRouter.get('/byuser/:userId', getAllRecipesByUserId);

/**
 * Method   Desc
 * GET      Get all recipe for a cookbook id
 */
recipeRouter.get('/bycookbook/:cookbookId', getAllRecipesByCookbookId);

/**
 * Method   Desc
 * GET      Get a all recipe for a collection id
 */
recipeRouter.get('/bycollection/:collectionId', getAllRecipesByCollectionId);

/**
 * Method   Desc
 * GET      Get a particular recipe for a recipe id
 */
recipeRouter.get('/byrecipe/:recipeId', getRecipeByRecipeId);

/**
 * Method   Desc
 * POST     To create a new recipe
 */
recipeRouter.post('/new', createNewRecipe);

/**
 * Method   Desc
 * PATCH    To update a particular recipe for a recipe id
 */
recipeRouter.patch('/:recipeId', updateRecipe);

/**
 * Method   Desc
 * DELETE   To delete a particular recipe for a recipe id
 */
recipeRouter.delete('/:recipeId', deleteRecipe);


export default recipeRouter;

