import mongoose from "mongoose";

import CommentLike from "../models/commentLike.js";


export async function getAllCommentLikes(req, res) {
    try {
        const commentLikes = await CommentLike.find({})
        res.status(200).json(commentLikes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function createCommentLike(req, res) {
    const { userId, commentId } = req.body

    const newCommentLike = new CommentLike({
        userId,
        commentId: mongoose.Types.ObjectId(commentId),
    })

    try {
        const latestCommentLike = await newCommentLike.save()
        res.status(200).json(latestCommentLike)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function deleteCommentLike(req, res) {
    const { commentLikeId } = req.params

    let commentLike

    try {
        commentLike = await CommentLike.findById({ _id: commentLikeId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await commentLike.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
