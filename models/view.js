import mongoose from "mongoose";


const ViewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: "Recipes",
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now, immutable: true },
});


export default mongoose.model('Views', ViewSchema);

