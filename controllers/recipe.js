import mongoose from "mongoose";

import Recipe from "../models/recipe.js"


// working
export async function getAllRecipes(req, res) {
    try {
        const recipes = await Recipe.find({})
        res.status(200).json(recipes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function getRecipesDisplay(req, res) {
    const query = Recipe.aggregate([
        {
            "$lookup": {
                "from": "authors",
                "localField": "authorId",
                "foreignField": "_id",
                "as": "Author"
            },
        },
        {
            "$lookup": {
                "from": "likes",
                "localField": "_id",
                "foreignField": "recipeId",
                "as": "Likes",
            },
        },
        {
            "$lookup": {
                "from": "views",
                "localField": "_id",
                "foreignField": "recipeId",
                "as": "Views"
            },
        },
        {
            "$project": {"Author._id": 1, "Author.name": 1, "Author.thumbnail": 1, "thumbnail": 1, "title": 1, "duration": 1, "vegOrNonVeg": 1, "createdAt": 1, "likeCount": {"$size": "$Likes"}, "viewCount": {"$size": "$Views"} }
        },
        {
            "$limit": 15,
        },
    ])

    query.exec(function (error, recipeDataForDisplay) {
        if (error) res.status(500).json({ message: error.message })
        res.status(200).json(recipeDataForDisplay)
    })

};


export async function getRecipeDetailsByRecipeId(req, res) {
    const { recipeId } = req.params

    const query = Recipe.aggregate([
        {
            // match id
            $match: { _id: mongoose.Types.ObjectId(recipeId) }
        },
        {
            "$lookup": {
                "from": "views",
                "localField": "_id",
                "foreignField": "recipeId",
                "as": "Views",
            },
        },
        {
            "$lookup": {
                "from": "ratings",
                "localField": "_id",
                "foreignField": "recipeId",
                "as": "Ratings",
            },
        },
        {
            "$lookup": {
                "from": "likes",
                "localField": "_id",
                "foreignField": "recipeId",
                "as": "Likes",
            },
        },
        {
            "$lookup": {
                "from": "authors",
                "localField": "authorId",
                "foreignField": "_id",
                "as": "Author",
            },
        },
        {
            "$project": { "heroBanner": 1, "title": 1, "description": 1, "Author.thumbnail": 1, "Author.name": 1, "Author.authorSocials": 1, "Author.isVerified": 1, "viewCount": { "$size": "$Views" }, "Rating": { "Rating": { "$avg": "$Ratings.rating" }, "ratingCount": { "$size": "$Ratings" } }, "steps": 1, "ingridients": 1, "duration": 1, "budget": 1, "likeCount": {"$size": "$Likes"} }
        },
    ])

    query.exec(function (error, recipeDetails) {
        if (error) res.status(404).json({ message: error.message })
        res.status(200).json(recipeDetails)
    })

};


export async function createRecipe (req, res) {
    const { userId, authorId, cookbookId, thumbnail, heroBanner, title, description, steps, ingridients, nutrients, duration, budget, tags, categories, vegOrNonVeg, } = req.body

    for (let index = 0; index < cookbookId.length; index++) {
        cookbookId[index] = mongoose.Types.ObjectId(cookbookId[index])
    }

    const recipe = new Recipe({
        userId,
        authorId: mongoose.Types.ObjectId(authorId),
        cookbookId,
        thumbnail,
        heroBanner,
        title,
        description,
        steps,
        ingridients,
        nutrients,
        duration,
        budget,
        tags,
        categories,
        vegOrNonVeg,
    })

    try {
        const newRecipe = await recipe.save()
        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

