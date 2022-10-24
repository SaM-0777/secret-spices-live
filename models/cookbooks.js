import mongoose from "mongoose";


const subscriptionsSchema = new mongoose.Schema({
    userId: {
        type: String,
        // unique: true,
    },
    createdAt: { type: Date, immutable: true, default: Date.now },
});

const cookbookSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    profileImage: {
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
    collections: {
        type: [String],     // holds collection_ids
        default: []
    },
    recipes: {
        type: [String],     // holds recipe_ids
        default: []
    },
    subscriptions: {
        type: [subscriptionsSchema],
        default: []
    },
    createdAt: { type: Date, immutable: true, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


export default mongoose.model("Cookbooks", cookbookSchema);

