import mongoose from "mongoose";

import Rating from "../models/rating.js";


export async function getAllRatings(req, res) {
    try {
        const ratings = await Rating.find({})
        res.status(200).json(ratings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function createRating(req, res) {
    const { userId, recipeId, rating } = req.body

    const newRating = new Rating({
        userId,
        recipeId: mongoose.Types.ObjectId(recipeId),
        rating,
    })

    try {
        const latestRating = await newRating.save()
        res.status(200).json(latestRating)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function deleteRating(req, res) {
    const { ratingId } = req.params

    let rating

    try {
        rating = await Rating.findById({ _id: ratingId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await rating.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


