import mongoose from "mongoose";


const ReplyLike = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    commentId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    replyLikeStatus: {
        type: Boolean,
        default: false,
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model('ReplyLikes', ReplyLike);

