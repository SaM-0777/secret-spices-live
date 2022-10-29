import express from "express";

import { getAllComments, createComment, updateComment, deleteComment } from "../../controllers/comment.js";


const commentRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all comments
 */
commentRouter.get('/all', getAllComments);


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

