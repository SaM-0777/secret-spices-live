import express from "express";

import { getAllReplyToComment, createReplyToComment, deleteReplyToComment } from "../../controllers/replyToComment.js";


const ReplyToCommentRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all ReplyToComments
 */
ReplyToCommentRouter.get('/all', getAllReplyToComment);


/**
 * Method   Desc
 * POST     Create a ReplyToComment
 */
ReplyToCommentRouter.post('/create/new', createReplyToComment);


/**
 * Method   Desc
 * DELETE   Delete a Views
 */
ReplyToCommentRouter.delete('/delete/:replyToCommentId', deleteReplyToComment);



export default ReplyToCommentRouter;
