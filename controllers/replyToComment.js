import mongoose from "mongoose";

import ReplyToComment from "../models/replyToComment.js";


export async function getAllReplyToComment(req, res) {
    try {
        const replyToComments = await ReplyToComment.find({})
        res.status(200).json(replyToComments)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function createReplyToComment(req, res) {
    const { userId, commentId, reply } = req.body

    const newReplyToComment = new ReplyToComment({
        userId,
        commentId: mongoose.Types.ObjectId(commentId),
        reply,
    })

    try {
        const latestReplyToComment = await newReplyToComment.save()
        res.status(200).json(latestReplyToComment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function deleteReplyToComment(req, res) {
    const { replyToCommentId } = req.params

    let replyToComment

    try {
        replyToComment = await ReplyToComment.findById({ _id: replyToCommentId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await replyToComment.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

