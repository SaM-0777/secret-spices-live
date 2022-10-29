import express from "express";

import AuthorRouter from "./userRoutes/author.js";
import CookbookRouter from "./userRoutes/cookbook.js";
import RecipeRouter from "./userRoutes/recipe.js";
import ViewRouter from "./userRoutes/view.js";
import commentRouter from "./userRoutes/comment.js";


export const userRoutes = express.Router();
export const ownerRoutes = express.Router();


userRoutes.use('/author', AuthorRouter);
userRoutes.use('/cookbook', CookbookRouter);
userRoutes.use('/recipe', RecipeRouter);
userRoutes.use('/view', ViewRouter);
userRoutes.use('/comment', commentRouter);

