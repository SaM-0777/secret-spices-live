import express from "express";

import { createView, deleteView, getAllViews } from "../../controllers/view.js";


const ViewRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Views
 */
ViewRouter.get('/all', getAllViews);


/**
 * Method   Desc
 * POST     Create a Views
 */
ViewRouter.post('/create/new', createView);


/**
 * Method   Desc
 * DELETE   Delete a Views
 */
ViewRouter.delete('/delete/:viewId', deleteView);


export default ViewRouter;

