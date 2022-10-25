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
collectionRouter.get('/', getAllCollections);

/**
 * Method   Desc
 * GET      Get all collection for a user id
 */
collectionRouter.get('/byuser/:userId', getAllCollectionsByUserId);

/**
 * Method   Desc
 * GET      Get all collection for a cookbook id
 */
collectionRouter.get('/bycookbook/:cookbookId', getAllCollectionsByCookbookId);

/**
 * Method   Desc
 * GET      Get a particular collection for a collection id
 */
collectionRouter.get('/bycollection/:collectionId', getCollectionByCollectionId);

/**
 * Method   Desc
 * POST     To create a new collection
 */
collectionRouter.post('/new', createNewCollection);

/**
 * Method   Desc
 * PATCH    To update a particular collection for a collection id
 */
collectionRouter.patch('/:collectionId', updateCollection);

/**
 * Method   Desc
 * DELETE   To delete a particular collection for a collection id
 */
collectionRouter.delete('/:collectionId', deleteCollection);


export default collectionRouter;

