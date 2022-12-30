import mongoose from "mongoose";

import UserSavedRecipesSchema from '../models/savedRecipes.js';


export async function createSavedUserRecipes(req, res) {
    const { userId, recipeId } = req.body
    let existingSavedUserRecipe

    try {
        existingSavedUserRecipe = await UserSavedRecipesSchema.find({ userId: userId, recipeId: mongoose.Types.ObjectId(recipeId) })
        // console.log(existingSavedUserRecipe)
    } catch (error) {
        
    }

    if (existingSavedUserRecipe.length === 0) {
        const userSavedRecipe = new UserSavedRecipesSchema({
            userId: userId,
            recipeId: mongoose.Types.ObjectId(recipeId)
        })
        try {
            const newUserSavedRecipe = await userSavedRecipe.save()
            res.status(200).json({ newUserSavedRecipe })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    } else {
        res.status(400).json({ error: "Action could not be completed" })
        /*const userSavedRecipe = new UserSavedRecipesSchema({
            userId: userId,
            recipeId: mongoose.Types.ObjectId(recipeId)
        })
        try {
            const newUserSavedRecipe = await userSavedRecipe.save()
            res.status(200).json({ newUserSavedRecipe })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }*/
    }
}


export async function deleteSavedUserRecipe(req, res) {
    const { userId, recipeId } = req.body

    let userSavedRecipe

    try {
        userSavedRecipe = await UserSavedRecipesSchema.find({ userId: userId, recipeId: recipeId })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    if (userSavedRecipe.length === 1) {
        try {
            const currentUserSavedRecipe = userSavedRecipe[0]
            await currentUserSavedRecipe.remove()
            res.status(200).json({ message: "Deleted successfully" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    } else {
        res.status(400).json({ error: "Action can not be completed" })
    }


}



