import mongoose from "mongoose";


// Cookbook
const CookbookSchema = new mongoose.Schema({
    userId: {             // owner cognito userId
        type: String,
        immutable: true,
        required: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Authors',
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
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
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model("Cookbooks", CookbookSchema);

