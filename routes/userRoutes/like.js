import express from "express";

import { createLike, deleteLike, getAllLikes } from "../../controllers/like.js";
import isValidAuthor from '../../middlewares/user/isValidAuthor.js'


const LikeRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Likes
 */
LikeRouter.get('/all', getAllLikes);


/**
 * Method   Desc
 * POST     Create a Like
 */
LikeRouter.post('/create/new', isValidAuthor, createLike);


/**
 * Method   Desc
 * DELETE   Delete a Like
 */
// LikeRouter.delete('/delete/:likeId', isValidAuthor, deleteLike);


export default LikeRouter;
