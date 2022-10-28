import mongoose from "mongoose";


const LikeSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Recipes',
    },
    likeStatus: {
        type: Boolean,
        default: false,
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now, immutable: true },
});


export default mongoose.model('Likes', LikeSchema);

