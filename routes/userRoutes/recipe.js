import express from "express";

import { getAllRecipes, createRecipe } from "../../controllers/recipe.js";


const RecipeRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all recipes
 */
RecipeRouter.get('/all', getAllRecipes);


/**
 * Method   Desc
 * GET      Get all recipes
 */
RecipeRouter.post('/create/new', createRecipe);



export default RecipeRouter;

