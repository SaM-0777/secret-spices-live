import mongoose from "mongoose";

import Comment from "../models/comment.js";


export async function getAllComments(req, res) {
    try {
        const comments = await Comment.find({})
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function createComment(req, res) {
    const { userId, recipeId, comment } = req.body

    const newComment = new Comment({
        userId,
        recipeId: mongoose.Types.ObjectId(recipeId),
        comment,
    });

    try {
        const latestComment = await newComment.save()
        res.status(201).json(latestComment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function updateComment(req, res) {
    const { commentId } = req.params
    const { comment } = req.body

    let oldComment

    try {
        oldComment = await Comment.findById({ _id: commentId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    oldComment.comment = comment || oldComment.comment
    oldComment.updatedAt = Date.now()

    try {
        const updatedComment = await oldComment.save()
        res.status(201).json(updatedComment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function deleteComment(req, res) {
    const { commentId } = req.params

    let comment

    try {
        comment = await Comment.findById({ _id: commentId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await comment.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


