import express from "express";

import { getAllRecipes, createRecipe, getRecipesDisplay, getRecipeDetailsByRecipeId } from "../../controllers/recipe.js";


const RecipeRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all recipes
 */
RecipeRouter.get('/all', getAllRecipes);


/**
 * Method   Desc
 * GET      Get all recipes for display
 */
RecipeRouter.get('/display/all', getRecipesDisplay);


/**
 * Method   Desc
 * GET      Get recipe details
 */
RecipeRouter.get('/details/:recipeId', getRecipeDetailsByRecipeId);


/**
 * Method   Desc
 * POST     Create a recipe
 */
RecipeRouter.post('/create/new', createRecipe);



export default RecipeRouter;

