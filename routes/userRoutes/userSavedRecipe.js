import express from 'express';

import { createSavedUserRecipes, deleteSavedUserRecipe } from '../../controllers/savedRecipes.js';
import isValidAuthor from '../../middlewares/user/isValidAuthor.js';


const UserSavedRecipeRouter = express.Router()


UserSavedRecipeRouter.post('/new', isValidAuthor, createSavedUserRecipes);
UserSavedRecipeRouter.delete('/delete', isValidAuthor, deleteSavedUserRecipe);


export default UserSavedRecipeRouter;
