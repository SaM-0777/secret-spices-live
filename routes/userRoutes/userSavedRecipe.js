import express from 'express';

import { createOrDeleteSavedUserRecipes } from '../../controllers/savedRecipes.js';
import isValidAuthor from '../../middlewares/user/isValidAuthor.js';


const UserSavedRecipeRouter = express.Router()


UserSavedRecipeRouter.post('/new', isValidAuthor, createOrDeleteSavedUserRecipes);


export default UserSavedRecipeRouter;
