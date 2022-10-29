import mongoose from "mongoose";


const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        immutable: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: "Recipes",
        required: true,
        immutable: true,
    },
    comment: {
        type: String,
        required: true,
        maxLength: 500,
    },
    pinned: {
        type: Boolean,
        default: false,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model("Comments", CommentSchema);

