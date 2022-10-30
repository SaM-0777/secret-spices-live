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
 * POST     Create a Comment like
 */
CommentLikeRouter.post('/create/new', createCommentLike);


/**
 * Method   Desc
 * DELETE   Delete a Views
 */
CommentLikeRouter.delete('/delete/:commentLikeId', deleteCommentLike);



export default CommentLikeRouter;



