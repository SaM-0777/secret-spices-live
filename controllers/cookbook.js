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
            $lookup: { from: "recipes", localField: "_id", foreignField: "cookbookId", as: "Recipes" },
        },
        {
            $project: { "userId": 1, "authorId": 1, "thumbnail": 1, "name": 1, "description": 1, "recipeCount": { "$size": "$Recipes" } }
        },
    ]).allowDiskUse(true)
    
    query.exec(function (error, cookbookDataForDisplay) {
        if (error) return res.status(500).json({ message: error.message })
        res.status(200).json(cookbookDataForDisplay)
    })
};


export async function getCookbookDetailsByCookbookId(req, res) {
    const { cookbookId } = req.params

    const query = Cookbook.aggregate([
        {
            // match id
            $match: { _id: mongoose.Types.ObjectId(cookbookId) }
        },
        {
            $lookup: {
                from: "recipes",
                let: { "cookbookId": "$_id" },
                pipeline: [
                    {"$match": {"$expr": {"$in": ["$$cookbookId", "$cookbookId"]}}},
                    // Ratings lookup
                    {"$lookup": {"from": "ratings", "let": {"recipeId": "$_id"}, pipeline: [
                        {"$match": {"$expr": {"$eq": ["$recipeId", "$$recipeId"]}}}
                    ], "as": "Ratings"}},
                    // Views lookup
                    {"$lookup": {"from": "views", "localField": "_id", "foreignField": "recipeId", "as": "Views"}},
                    { "$project": { "thumbnail": 1, "title": 1, "Rating": { "$avg": "Ratings.rating" }, "ratingCount": { "$size": "$Ratings" }, "viewCount": { "$size": "$Views" }, "duration": 1, "vegOrNonVeg": 1, "createdAt": 1}}
                ],
                "as": "Recipes"
            },
        },
    ]).allowDiskUse(true)

    query.exec(function (error, cookbookDetails) {
        if (error) res.status(500).json({ message: error.message })
        res.status(200).json(cookbookDetails)
    })
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
};

