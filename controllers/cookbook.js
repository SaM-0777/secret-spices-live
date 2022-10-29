import mongoose from "mongoose";
import Cookbook from "../models/cookbook.js";


export async function getAllCookbooks (req, res) {
    try {
        const cookbooks = await Cookbook.find({})
        res.status(200).json(cookbooks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export async function getCookbooksDisplay (req, res) {
    const query = Cookbook.aggregate([
        {

        }
    ])    
};


// working - *security
export async function createCookbook (req, res) {
    const { userId, authorId, thumbnail, name, description } = req.body

    const cookbook = new Cookbook({
        userId,
        authorId: mongoose.Types.ObjectId(authorId),
        thumbnail,
        name,
        description
    })

    try {
        const newCookbook = await cookbook.save()
        res.status(201).json(newCookbook)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


// working - *security
export async function updateCookbook (req, res) {
    const { cookbookId } = req.params
    const { thumbnail, name, description } = req.body

    let cookbook

    try {
        cookbook = await Cookbook.findById({ _id: cookbookId })
    } catch (error) {
        res.status(404).json({ vmessage: error.message })
    }

    cookbook.thumbnail = thumbnail || cookbook.thumbnail
    cookbook.name = name || cookbook.name
    cookbook.description = description || cookbook.description
    cookbook.updatedAt = Date.now()

    try {
        const updatedCookbook = await cookbook.save()
        res.status(201).json(updatedCookbook)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

