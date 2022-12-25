import mongoose from "mongoose";


/*const stepSchema = new mongoose.Schema({
    step: {
        type: String,
        maxLength: 500,
    },
    image: {
        type: String,
    }
});*/

const IngridientSchema = new mongoose.Schema({
    ingridient: {
        type: String,
        maxLength: 200,
    },
    image: {
        type: String,
    }
});

const NutrientSchema = new mongoose.Schema({
    nutrientType: {     // fat, calories, carbs, protein, sodium etc..
        type: String,
        maxLength: 200,
    },
    nutrientValue: {
        type: Number,
    },
    unit: {             // mg, mug etc..
        type: String,
    },
});

const RecipeSchema = new mongoose.Schema({
    /* userId: {
        type: String,
        // required: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Authors',
        // required: true,
    },*/
    /* cookbookId: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Cookbooks' }],
        default: [],
    },*/
    RecipeNumber: {
        type: Number,
    },
    Thumbnail: {
        type: String,
        required: true,
    },
    HeroBanner: {
        type: [String],
        // required: true,
    },
    Title: {
        type: String,
        required: true,
        maxLength: 60,
    },
    Description: {
        type: String,
        // required: true,
        maxLength: 2000,
    },
    Instructions: {
        type: [String],
        required: true,
    },
    Ingridients: {
        type: [String],
        required: true,
    },
    Nutrients: {
        type: [NutrientSchema],
    },
    /*duration: {
        type: Number,   // in secs
        required: true,  
    },
    budget: {
        type: mongoose.Types.Decimal128,
        required: true,
    },*/
    Tags: {
        type: [String],
        // required: true,
    },
    Servings: {
        type: Number,
        // required: true,
    },
    Categories: {
        type: [String],
        // required: true,
    },
    Vegan: {
        type: Boolean,  // 0->NonVeg   1->Veg
        // required: true,
    },
    CreatedAt: { type: Date, immutable: true, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
});


export default mongoose.model("Recipes", RecipeSchema);

