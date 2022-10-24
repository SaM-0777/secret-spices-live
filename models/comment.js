import mongoose from "mongoose";


const likeSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

const replySchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    reply: {
        type: String,
        required: true,
        maxLength: 300,
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

const commentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    comment: {
        type: String,
        required: true,
        maxLength: 300,
    },
    like: {
        type: [likeSchema],
    },
    reply: {
        type: [replySchema],

    },
    createdAt: { type: Date, immutable: true, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


export default mongoose.model("Comments", commentSchema);

