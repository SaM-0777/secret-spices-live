import express from "express";

import AuthorRouter from "./userRoutes/author.js";
import CookbookRouter from "./userRoutes/cookbook.js";
import RecipeRouter from "./userRoutes/recipe.js";
import ViewRouter from "./userRoutes/view.js";
import LikeRouter from "./userRoutes/like.js";
import RatingRouter from "./userRoutes/rating.js";
import commentRouter from "./userRoutes/comment.js";
import ReplyToCommentRouter from "./userRoutes/replyToComment.js";


export const userRoutes = express.Router();
export const ownerRoutes = express.Router();


userRoutes.use('/author', AuthorRouter);
userRoutes.use('/cookbook', CookbookRouter);
userRoutes.use('/recipe', RecipeRouter);
userRoutes.use('/view', ViewRouter);
userRoutes.use('/like', LikeRouter);
userRoutes.use('/rating', RatingRouter);
userRoutes.use('/comment', commentRouter);
userRoutes.use('/replytocomment', ReplyToCommentRouter);

