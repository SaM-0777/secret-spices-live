import mongoose from "mongoose";
import Author from "../models/author.js";


// working
export async function getAllAuthors (req, res) {
    try {
        const authors = await Author.find()
        res.status(200).json(authors)
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
};

// working
export async function getAuthorsDisplay(req, res) {
    const query = Author.aggregate([
        {
            $lookup: {
                from: "Recipes",
                localField: "_id",
                foreignField: "authorId",
                as: "Recipes"
            }
        },
        {
            $lookup: {
                from: "Subscriptions",
                localField: "_id",
                foreignField: "authorId",
                as: "Subscriptions"
            }
        },
        {
            $project: {
                thumbnail: 1,
                name: 1,
                recipeCount: { $size: "$Recipes" },
                subscriptionCount: { $size: "$Subscriptions" }
            }
        }
    ]).allowDiskUse(true)

    query.exec(function (error, authorDataForDisplay) {
        if (error) return res.status(500).json({ message: error.message })
        res.status(200).json(authorDataForDisplay)
    })
};


export async function getAuthorDetailsByAuthorId (req, res) {
    const { authorId } = req.params

    const query = Author.aggregate([
        {
            // match id
            $match: {_id: mongoose.Types.ObjectId(authorId)}
        },
        {
            // Recipe lookup
            $lookup: {
                from: "Recipes",
                let: { "authorId": "$_id" },
                pipeline: [
                    { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                    // Recipe Views lookup
                    {"$lookup": {
                        "from": "Views", "let": { "recipeId": "$_id" },
                        "pipeline": [{ "$match": { "$expr": { "$eq": ["$recipeId", "$$recipeId"] } } }],
                        "as": "Views",
                    }},
                    // Recipe Ratings lookup
                    {"$lookup": {
                        "from": "Ratings", "let": { "recipeId": "$_id" },
                        "pipeline": [{ "$match": { "$expr": { "$eq": ["$recipeId", "$$recipeId"] } } }],
                        "as": "Ratings",
                    }},
                    // Recipes projections
                    { "$project": { "authorId": 1, "thumbnail": 1, "title": 1, "description": 1, "Ratings": { "avgRating": { "$avg": "$Ratings.rating"}, "ratingCount": {"$size": "$Ratings"}}, "duration": 1, "vegOrNonVeg": 1, "viewCount": { "$size": "$Views" }, "createdAt": 1 } }
                ],
                as: "Recipes"
            },
        },
        {
            // Cookbook lookup
            $lookup: {
                from: "Cookbooks",
                let: { "authorId": "$_id"},
                pipeline: [
                    { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                    {"$project": {"thumbnail": 1, "name": 1, "updatedAt": 1}}
                ],
                as: "Cookbooks",
            },
        },
        {
            //Subscription lookup
            $lookup: {
                from: "Subscriptions",
                let: { "authorId": "$_id" },
                pipeline: [
                    { "$match": {"$expr": { "$eq": ["$authorId", "$$authorId"]}}},
                    { "$project": {"_id": 1 }},
                ],
                as: "Subscriptions",
            },
        },
        {
            // Author projection
            $project: {
                "thumbnail": 1,
                "banner": 1,
                "name": 1,
                "description": 1,
                "recipeCount": { "$size": "$Recipes" },
                "subscriptionCount": {"$size": "$Subscriptions"}
            }
        }
    ]).allowDiskUse(true)

    query.exec(function (error, authorDetailsByAuthorId) {
        if (error) return res.status(500).json({ message: error.message })
        res.status(200).json(authorDetailsByAuthorId)
    })
};

// working
export async function createAuthor (req, res) {
    const { userId, thumbnail, banner, name, description, authorSocials, location } = req.body

    const author = new Author({
        userId,
        thumbnail,
        banner,
        name,
        description,
        authorSocials,
        location,
    })

    try {
        const newAuthor = await author.save()
        res.status(201).json(newAuthor)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

// working
export async function updateAuthor(req, res) {
    const { authorId } = req.params
    const { thumbnail, banner, name, description, authorSocials } = req.body
    
    let author
    
    try {
        author = await Author.findById({ _id: authorId })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

    author.thumbnail = thumbnail || author.thumbnail
    author.banner = banner || author.banner
    author.name = name || author.name
    author.description = description || author.description
    author.authorSocials = authorSocials || author.authorSocials

    try {
        const updatedAuthor = await author.save()
        res.status(201).json(updatedAuthor)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

