import mongoose from "mongoose";


const ViewSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: "Recipes",
        required: true,
    },
    viewStatus: {
        type: Boolean,   // false->No    true->Yes
        default: false,
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now, immutable: true },
});


export default mongoose.model('Views', ViewSchema);

