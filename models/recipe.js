import mongoose from "mongoose";


const stepSchema = mongoose.Schema({
    step: {
        type: String,
        maxLength: 200,
    },
    image: {
        type: String,
    }
});

const ingridientSchema = mongoose.Schema({
    ingridient: {
        type: String,
        maxLength: 150,
    },
    image: {
        type: String,
    }
});

const nutrientSchema = mongoose.Schema({
    nutrientType: {
        type: String,
        maxLength: 150,
    },
    nutrientValue: {
        type: Number,
    },
    unit: {
        type: String,
    },
    image: {
        type: String,
    }
});

const ratingSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
    },
    rating: {
        type: Number,
    },
});

const viewSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

const likeSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const recipeSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    cookbookId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    collectionId: {
        type: [mongoose.Types.ObjectId],
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    heroBanner: {
        type: [String],
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        maxLength: 500,
    },
    steps: {
        type: [stepSchema],
        required: true,
    },
    ingridients: {
        type: [ingridientSchema],
        required: true,
    },
    nutrients: {
        type: [nutrientSchema],
    },
    duration: {
        type: [Decimal128],
        required: true,  
    },
    budget: {
        type: [Decimal128],
        required: true,
    },
    views: {
        type: [viewSchema],
    },
    likes: {
        type: [likeSchema],
    },
    ratings: {
        type: [ratingSchema],
    },
    comments: {
        type: [mongoose.Types.ObjectId],
    },
    tags: {
        type: [String],
        // required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    createdAt: { type: Date, immutable: true, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


export default mongoose.model("Recipes", recipeSchema);

