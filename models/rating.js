import mongoose from "mongoose";


const RatingSchema = new mongoose.Schema({
    userId: {               // the user who has rated it.
        type: String,
        required: true,
        unique: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: "Recipes",
        required: true,
    },
    rating: {
        type: Decimal128,
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now, immutable: true },
});


export default mongoose.model('Ratings', RatingSchema);

