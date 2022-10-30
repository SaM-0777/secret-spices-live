import express from "express";

import { getAllReplyLikes, createReplyLike, deleteReplyLike } from "../../controllers/replyLike.js";



const ReplyLikeRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Reply Likes
 */
ReplyLikeRouter.get('/all', getAllReplyLikes);


/**
 * Method   Desc
 * POST     Create a Reply like
 */
ReplyLikeRouter.post('/create/new', createReplyLike);


/**
 * Method   Desc
 * DELETE   Delete a Reply Like
 */
ReplyLikeRouter.delete('/delete/:replyLikeId', deleteReplyLike);



export default ReplyLikeRouter;

