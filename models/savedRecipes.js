import mongoose from "mongoose";


const UserSavedRecipesSchema = new mongoose.Schema({
    userId: {             // owner cognito userId
        type: String,
        immutable: true,
        required: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        required: true,
        immutable: true,
    },
    CreatedAt: { type: Date, immutable: true, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
});


export default mongoose.model("UserSavedRecipes", UserSavedRecipesSchema)

