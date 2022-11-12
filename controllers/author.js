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
export async function getAuthorsDisplay (req, res) {
    const query = Author.aggregate([
        {
            $lookup: {
                from: "recipes",
                localField: "_id",
                foreignField: "authorId",
                as: "Recipes"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "authorId",
                as: "Subscriptions"
            }
        },
        {
            $project: {
                _id: 1,
                thumbnail: 1,
                name: 1,
                recipeCount: { $size: "$Recipes" },
                subscriptionCount: { $size: "$Subscriptions" }
            }
        },
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
                from: "recipes",
                let: { "authorId": "$_id" },
                pipeline: [
                    { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                    // Recipe Likes lookup
                    {"$lookup": {
                        "from": "likes", "let": { "recipeId": "$_id" },
                        "pipeline": [{ "$match": { "$expr": { "$eq": ["$recipeId", "$$recipeId"] } } }],
                        "as": "Likes",
                    }},
                    // Recipes projections
                    { "$project": { "thumbnail": 1, "title": 1, "duration": 1, "vegOrNonVeg": 1, "likes": { "$size": "$Likes" }, "createdAt": 1 } }
                ],
                as: "Recipes"
            },
        },
        {
            // Cookbook lookup
            $lookup: {
                from: "cookbooks",
                let: { "authorId": "$_id"},
                pipeline: [
                    { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                    {"$lookup": {
                        "from": "ratings", "let": { "cookbookId": "$_id" },
                        "pipeline": [{ "$match": { "$expr": { "$eq": ["$cookbookId", "$$cookbookId"] } } },],
                        "as": "Ratings",
                    }
                    },
                    { "$project": { "_id": 1, "thumbnail": 1, "name": 1, "Ratings": {"avgRating": {"$avg": "Ratings.rating"}, "ratingCount": {"$size": "$Ratings"}}, "createdAt": 1 }}
                ],
                as: "Cookbooks",
            },
        },
        {
            //Subscription lookup
            $lookup: {
                from: "subscriptions",
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
                "_id": 1,
                "userId": 1,
                "thumbnail": 1,
                "banner": 1,
                "name": 1,
                "description": 1,
                "authorSocials": 1,
                "location": 1,
                "isVerified": 1,
                "createdAt": 1,
                "Cookbooks": 1,
                "Recipes": 1,
                "recipeCount": { "$size": "$Recipes" },
                "cookbookCount": { "$size": "$Cookbooks" },
                "subscriptionCount": {"$size": "$Subscriptions"}
            }
        }
    ]).allowDiskUse(true)

    query.exec(function (error, authorDetailsByAuthorId) {
        if (error) return res.status(500).json({ message: error.message })
        res.status(200).json(authorDetailsByAuthorId)
    })
};

// working - *security
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

// working - *security
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
    author.updatedAt = new Date.now()

    try {
        const updatedAuthor = await author.save()
        res.status(201).json(updatedAuthor)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

