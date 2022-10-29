import mongoose from "mongoose";

import View from "../models/view.js";


export async function getAllViews(req, res) {
    try {
        const views = await View.find({})
        res.status(200).json(views)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function createView (req, res) {
    const { userId, recipeId } = req.body

    const view = new View({
        userId,
        recipeId: mongoose.Types.ObjectId(recipeId),
    })

    try {
        const newView = await view.save()
        res.status(200).json(newView)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function deleteView(req, res) {
    const { viewId } = req.params
    
    let view

    try {
        view = await View.findById({ _id: viewId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    try {
        await view.remove()
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
