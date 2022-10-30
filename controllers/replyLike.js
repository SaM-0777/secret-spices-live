import mongoose from "mongoose";

import ReplyLike from "../models/replyLike.js";


export async function getAllReplyLikes(req, res) {
    try {
        const replyLikes = await ReplyLike.find({})
        res.status(200).json(replyLikes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function createReplyLike(req, res) {
    const { userId, replyToCommentId } = req.body

    const newReplyLike = new ReplyLike({
        userId,
        replyToCommentId: mongoose.Types.ObjectId(replyToCommentId),
    })

    try {
        const latestReplyLike = await newReplyLike.save()
        res.status(200).json(latestReplyLike)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function deleteReplyLike(req, res) {
    const { replyLikeId } = req.params

    let replyLike

    try {
        replyLike = await ReplyLike.findById({ _id: replyLikeId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await replyLike.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

