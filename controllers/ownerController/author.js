import mongoose from "mongoose";
import Author from "../../models/author.js";


export async function getCurrentAuthenticatedUser(req, res) {
    const { userId } = req.params

    const query = Author.aggregate([
        { $match: { userId: userId } },
    ]).allowDiskUse(true)

    query.exec(function (error, currentUser) {
        if (error) return res.status(404).json({ error: error.message })
        res.status(200).json(currentUser)
    })
};


export async function getAuthorDetailsByUserId(req, res) {
    const { userId } = req.params
    
    const query = Author.aggregate([
        { $match: { userId: userId } },
        {
            // Recipe lookup
            $lookup: {
                from: "recipes",
                let: { "authorId": "$_id" },
                pipeline: [
                    { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                    // Recipe Likes lookup
                    {
                        "$lookup": {
                            "from": "likes", "let": { "recipeId": "$_id" },
                            "pipeline": [{ "$match": { "$expr": { "$eq": ["$recipeId", "$$recipeId"] } } }],
                            "as": "Likes",
                        }
                    },
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
                let: { "authorId": "$_id" },
                pipeline: [
                    { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                    {
                        "$lookup": {
                            "from": "ratings", "let": { "cookbookId": "$_id" },
                            "pipeline": [{ "$match": { "$expr": { "$eq": ["$cookbookId", "$$cookbookId"] } } },],
                            "as": "Ratings",
                        }
                    },
                    { "$project": { "_id": 1, "thumbnail": 1, "name": 1, "CookbookRatings": { "avgRating": { "$avg": "$Ratings.rating" }, "ratingCount": { "$size": "$Ratings" } }, "createdAt": 1 } }
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
                    { "$match": { "$expr": { "$eq": ["$authorId", "$$authorId"] } } },
                    { "$project": { "_id": 1 } },
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
                "subscriptionCount": { "$size": "$Subscriptions" }
            }
        }
    ]).allowDiskUse(true)
    
    query.exec(function (error, authorDetailsByUserId) {
        if (error) return res.status(500).json({ message: error.message })
        res.status(200).json(authorDetailsByUserId)
    })

}


