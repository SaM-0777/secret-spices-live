import express from "express";

import { getAllCommentLikes, createCommentLike, deleteCommentLike } from "../../controllers/commentLike.js";


const CommentLikeRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Comment Likes
 */
CommentLikeRouter.get('/all', getAllCommentLikes);


/**
 * Method   Desc
 * POST     Create a Comment Like
 */
CommentLikeRouter.post('/create/new', createCommentLike);


/**
 * Method   Desc
 * DELETE   Delete a Comment Like
 */
CommentLikeRouter.delete('/delete/:commentLikeId', deleteCommentLike);



export default CommentLikeRouter;

