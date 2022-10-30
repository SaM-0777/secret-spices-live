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


export async function createSubscription(req, res) {
    const { userId, authorId } = req.body

    const newSubscription = new Subscription({
        userId,
        authorId: mongoose.Types.ObjectId(authorId),
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
