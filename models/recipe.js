import mongoose from "mongoose";


const stepSchema = new mongoose.Schema({
    step: {
        type: String,
        maxLength: 500,
    },
    image: {
        type: String,
    }
});

const ingridientSchema = new mongoose.Schema({
    ingridient: {
        type: String,
        maxLength: 200,
    },
    image: {
        type: String,
    }
});

const nutrientSchema = new mongoose.Schema({
    nutrientType: {
        type: String,
        maxLength: 200,
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

const RecipeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Authors',
        required: true,
    },
    cookbookId: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Cookbooks' }],
        default: [],
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
        maxLength: 60,
    },
    description: {
        type: String,
        required: true,
        maxLength: 2000,
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
        type: Number,   // in secs
        required: true,  
    },
    budget: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    vegOrNonVeg: {
        type: Boolean,  // 0->Veg   1->NonVeg
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model("Recipes", RecipeSchema);

