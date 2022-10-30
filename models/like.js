import mongoose from "mongoose";


const LikeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        immutable: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Recipes',
        immutable: true,
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now, immutable: true },
});


export default mongoose.model('Likes', LikeSchema);

