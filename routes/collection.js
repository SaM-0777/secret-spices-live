import express from "express";

import {
    getAllCollections,
    getAllCollectionsByUserId,
    getAllCollectionsByCookbookId,
    getCollectionByCollectionId,
    createNewCollection,
    updateCollection,
    deleteCollection,
} from "../controllers/collection.js";


const collectionRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all collection
 */
collectionRouter.get('/collection', getAllCollections);

/**
 * Method   Desc
 * GET      Get all collection for a user id
 */
collectionRouter.get('/collection/:userId', getAllCollectionsByUserId);

/**
 * Method   Desc
 * GET      Get all collection for a cookbook id
 */
collectionRouter.get('/collection/:cookbookId', getAllCollectionsByCookbookId);

/**
 * Method   Desc
 * GET      Get a particular collection for a collection id
 */
collectionRouter.get('/collection/:collectionId', getCollectionByCollectionId);

/**
 * Method   Desc
 * POST     To create a new cookbook
 */
collectionRouter.post('/collection/new', createNewCollection);

/**
 * Method   Desc
 * PATCH    To update a particular collection for a collection id
 */
collectionRouter.patch('/collection/:collectionId', updateCollection);

/**
 * Method   Desc
 * DELETE   To delete a particular collection for a collection id
 */
collectionRouter.delete('/collection/:collectionId', deleteCollection);


export default collectionRouter;

