import mongoose from "mongoose";

import Recipe from "../models/recipe.js"


// working
export async function getAllRecipes(req, res) {
    const query = Recipe.aggregate([
        {
            "$limit": 15
        }
    ])

    query.exec(function (error, data) {
        if (error) res.status(404).json({ message: error.message })
        res.status(200).json(data)
    })
};


export async function getRecipesDisplay(req, res) {
    const { userId } = req.body

    const query = Recipe.aggregate([
        {
            "$sample": { size: 15 }
        },
        /*{
            "$lookup": {
                "from": "authors",
                "localField": "authorId",
                "foreignField": "_id",
                "as": "Author"
            },
        },*/
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
            "$lookup": {
                "from": "usersavedrecipes",
                "let": { "recipeId": "$_id" },
                "pipeline": [
                    { "$match": { "$expr": { "$eq": ["$recipeId", "$$recipeId"] } } },
                    { "$match": { "$expr": { "$eq": ["$userId", userId] } } },
                ],
                "as": "UserSavedRecipe"
            },
        },
        {
            "$project": { "Thumbnail": 1, "Title": 1, "Vegan": 1, "Image_Name": 1, "createdAt": 1, "likeCount": { "$size": "$Likes" }, "viewCount": { "$size": "$Views" }, "UserSavedRecipe": 1 }
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
    const { userId } = req.body

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
                "from": "comments",
                "localField": "_id",
                "foreignField": "recipeId",
                "as": "Comments",
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
                "from": "likes",
                "let": { "recipeId": "$_id" },
                "pipeline": [
                    { "$match": { "$expr": { "$eq": ["$recipeId", "$$recipeId"] } } },
                    { "$match": { "$expr": { "$eq": ["$userId", userId] } } },
                ],
                "as": "UserRecipeLike"
            },
        },
        {
            "$lookup": {
                "from": "usersavedrecipes",
                "let": { "recipeId": "$_id" },
                "pipeline": [
                    { "$match": { "$expr": { "$eq": ["$recipeId", "$$recipeId"] } } },
                    { "$match": { "$expr": { "$eq": ["$userId", userId] } } },
                ],
                "as": "UserSavedRecipe"
            },
        },
        /*{
            "$lookup": {
                "from": "authors",
                "localField": "authorId",
                "foreignField": "_id",
                "as": "Author",
            },
        },*/
        {
            "$project": { "HeroBanner": 1, "Title": 1, "Description": 1, "Servings": 1, "Nutrients": 1, "viewCount": { "$size": "$Views" }, "commentCount": { "$size": "$Comments" }, "Instructions": 1, "Image_Name": 1, "Ingredients": 1, "likeCount": { "$size": "$Likes" }, "UserRecipeLike": 1, "UserSavedRecipe": 1 }    // "Author._id": 1, "Author.thumbnail": 1, "Author.name": 1, "Author.authorSocials": 1, "Author.isVerified": 1,
        },
    ])

    query.exec(function (error, recipeDetails) {
        if (error) res.status(404).json({ message: error.message })
        res.status(200).json(recipeDetails)
    })

};


export async function createRecipe (req, res) {
    /*const { userId, authorId, cookbookId, thumbnail, heroBanner, title, description, steps, ingridients, nutrients, duration, budget, tags, categories, vegOrNonVeg, } = req.body

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
    }*/
    res.status(200).json({ message: "Action can not be completed!" })
};

