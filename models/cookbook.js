import mongoose from "mongoose";

// collection
const CookbookSchema = new mongoose.Schema({
    userId: {             // owner cognito userId
        type: String,
        required: true,
        unique: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Authors',
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

