import mongoose from "mongoose";


const collectionsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    cookbookId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        maxLength: 500,
    },
    tags: {
        type: [String],
        required: true,
    },
    recipes: {
        type: [mongoose.Types.ObjectId],
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});


export default mongoose.model("Collections", collectionsSchema);

