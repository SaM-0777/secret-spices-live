import express from "express";

import { getAllComments, getCommentsByRecipeId, createComment, updateComment, deleteComment } from "../../controllers/comment.js";


const commentRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all comments
 */
commentRouter.get('/all', getAllComments);


/**
 * Method   Desc
 * GET      Get all comments by Recipe id
 */
commentRouter.get('/commentsbyrecipe/:recipeId', getCommentsByRecipeId);


/**
 * Method   Desc
 * POST     Create a comment
 */
commentRouter.post('/create/new', createComment);


/**
 * Method   Desc
 * PATCH    Update a comment
 */
commentRouter.patch('/update/:commentId', updateComment);


/**
 * Method   Desc
 * DELETE   Delete a comment
 */
commentRouter.delete('/delete/:commentId', deleteComment);


export default commentRouter;

