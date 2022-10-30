import mongoose from "mongoose";


const ReplyLike = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        immutable: true,
    },
    replyToCommentId: {
        type: mongoose.Types.ObjectId,
        ref: "ReplyToComment",
        required: true,
        immutable: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model('ReplyLikes', ReplyLike);

