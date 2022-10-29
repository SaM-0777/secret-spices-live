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

