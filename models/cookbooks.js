import mongoose from "mongoose";


const cookbookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        require: true,
    },
    collectionsNo: {
        type: Number,
    },
    recipesNo: {
        type: Number,
    },
    subscriptionNo: {
        type: Number,
    },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
});


export default mongoose.model("Cookbooks", cookbookSchema);

