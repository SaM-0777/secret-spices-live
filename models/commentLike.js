import mongoose from "mongoose";


const CommentLike = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    commentId: {
        type: mongoose.Types.ObjectId,
        ref: "Comments",
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model('CommentLikes', CommentLike);

