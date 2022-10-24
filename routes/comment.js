import express from "express";

import {
    getAllComments,
    getAllCommentsByUserId,
    getAllCommentsByRecipeId,
    getCommentByCommentId,
    createNewComment,
    updateComment,
    deleteComment,
} from "../controllers/comment.js";


const commentRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all comments
 */
commentRouter.get('/comment', getAllComments);

/**
 * Method   Desc
 * GET      Get all comments for a user id
 */
commentRouter.get('/comment/:userId', getAllCommentsByUserId);

/**
 * Method   Desc
 * GET      Get all comments for a recipe id
 */
commentRouter.get('/comment/:recipeId', getAllCommentsByRecipeId);

/**
 * Method   Desc
 * GET      Get a comment for a comment id
 */
commentRouter.get('/comment/:commentId', getCommentByCommentId);

/**
 * Method   Desc
 * POST     To create a new comment
 */
commentRouter.post('/comment/new', createNewComment);

/**
 * Method   Desc
 * PATCH    To update a particular comment for a comment id
 */
commentRouter.patch('/comment/:commentId', updateComment);

/**
 * Method   Desc
 * DELETE   To delete a particular comment for a comment id
 */
commentRouter.delete('/comment/:commentId', deleteComment);


export default commentRouter;

