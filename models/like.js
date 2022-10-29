import mongoose from "mongoose";


const LikeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Recipes',
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now, immutable: true },
});


export default mongoose.model('Likes', LikeSchema);

