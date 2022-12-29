import mongoose from "mongoose";

import Like from "../models/like.js";


export async function getAllLikes(req, res) {
    try {
        const likes = await Like.find({})
        res.status(200).json(likes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function createLike(req, res) {
    const { userId, recipeId } = req.body       // userID: xxxx-xxxx-xxxx
    let existingLike

    try {
        existingLike = await Like.find({ userId: userId, recipeId: mongoose.Types.ObjectId(recipeId) })
    } catch (error) {
        
    }

    if (existingLike.length > 0) {
        try {
            await existingLike[0].remove()
            res.status(200).json({ message: "Deleted successfully" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    } else {
        const like = new Like({
            userId,
            recipeId: mongoose.Types.ObjectId(recipeId),
        })
        
        try {
            const newLike = await like.save()
            res.status(200).json(newLike)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
};


export async function deleteLike(req, res) {
    /*const { likeId } = req.params

    let like

    try {
        like = await Like.findById({ _id: likeId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await like.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }*/
};

