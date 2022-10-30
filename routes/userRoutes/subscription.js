import express from "express";

import { getAllSubscriptions, createSubscription, deleteSubscription } from "../../controllers/subscriptions.js";


const SubscriptionRouter = express.Router();


/**
 * Method   Desc
 * GET      Get all Subscriptions
 */
SubscriptionRouter.get('/all', getAllSubscriptions);


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

