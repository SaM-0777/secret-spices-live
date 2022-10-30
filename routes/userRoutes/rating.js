import express from "express";

import { getAllRatings, createRating, deleteRating } from "../../controllers/rating.js";


const RatingRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Ratings
 */
RatingRouter.get('/all', getAllRatings);


/**
 * Method   Desc
 * POST     Create a Rating
 */
RatingRouter.post('/create/new', createRating);


/**
 * Method   Desc
 * DELETE   Delete a Views
 */
RatingRouter.delete('/delete/:ratingId', deleteRating);


export default RatingRouter;

