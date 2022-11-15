import mongoose from "mongoose";

import Subscription from "../models/subscription.js";


export async function getAllSubscriptions(req, res) {
    try {
        const subscriptions = await Subscription.find({})
        res.status(200).json(subscriptions)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function getAllSubscriptionsByAuthorId(req, res) {
    const { userId, authorId } = req.params             // subbedAuthorId -> currentUserAuthorId who has sent the request && authorId -> to the author it wants to get

    const query = Subscription.aggregate([
        { $match: { authorId: mongoose.Types.ObjectId(authorId) } },
        { $match: { $expr: { $eq: ["$status", true] } } },
        { $lookup: { "from": "authors", "let": { "subbedAuthor": "$subbedAuthorId" }, "pipeline": [
            { "$match": { "$expr": { "$eq": ["$_id", "$$subbedAuthor"] } } },
            {"$lookup": { "from": "subscriptions", "let": {"authorId": "$_id"}, "pipeline": [
                { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                { "$match": { "$expr": { "$eq": ["$status", true] } } },
                { "$match": { subbedAuthorId: mongoose.Types.ObjectId(userId) } },
                /*{ "$project": { "isSubbed": { "$expr": { "$eq": [] } }, } }*/
            ], "as": "UserSubbedAuthors" }},
            { "$project": { "_id": 1, "name": 1, "thumbnail": 1, "UserSubbedAuthors._id": 1 } },
        ], "as": "SubscribedAuthors" } },
        { $project: { "_id": 0, "SubscribedAuthors": 1 } }
    ]).allowDiskUse(true)

    query.exec(function (error, subs) {
        if (error) res.status(500).json({ error: error.message })
        else res.status(200).json(subs)
    })
};


export async function createSubscription(req, res) {
    const { subbedAuthorId, authorId, status } = req.body

    const newSubscription = new Subscription({
        subbedAuthorId: mongoose.Types.ObjectId(subbedAuthorId),
        authorId: mongoose.Types.ObjectId(authorId),
        status
    })

    try {
        const latestRSubscription = await newSubscription.save()
        res.status(200).json(latestRSubscription)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function deleteSubscription(req, res) {
    const { subscriptionId } = req.params

    let subscription

    try {
        subscription = await Subscription.findById({ _id: subscriptionId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await subscription.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
