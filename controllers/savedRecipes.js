import mongoose from "mongoose";
import recipe from "../models/recipe.js";

import UserSavedRecipesSchema from '../models/savedRecipes.js';


export async function createOrDeleteSavedUserRecipes(req, res) {
    const { userId, recipeId } = req.body
    let existingSavedUserRecipe

    try {
        existingSavedUserRecipe = await UserSavedRecipesSchema.find({ userId: userId, recipeId: mongoose.Types.ObjectId(recipeId) })
        // console.log(existingSavedUserRecipe)
    } catch (error) {
        
    }

    if (existingSavedUserRecipe.length > 0) {
        // console.log(existingSavedUserRecipe)
        try {
            await existingSavedUserRecipe[0].remove()
            res.status(200).json({ message: "Deleted successfully" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    } else {
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
    }

}



