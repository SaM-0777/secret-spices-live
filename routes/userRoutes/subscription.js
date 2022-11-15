import express from "express";

import { getAllSubscriptions, getAllSubscriptionsByAuthorId, createSubscription, deleteSubscription } from "../../controllers/subscriptions.js";


const SubscriptionRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Subscriptions
 */
SubscriptionRouter.get('/all', getAllSubscriptions);


/**
 * Method   Desc
 * GET      Get all Subscriptions by authorId (creator)
 */
SubscriptionRouter.get('/author/:authorId/:userId', getAllSubscriptionsByAuthorId);


/**
 * Method   Desc
 * POST     Create a Subscription
 */
SubscriptionRouter.post('/create/new', createSubscription);


/**
 * Method   Desc
 * DELETE   Delete a Reply Like
 */
SubscriptionRouter.delete('/delete/:subscriptionId', deleteSubscription);


export default SubscriptionRouter;

