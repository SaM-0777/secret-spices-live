import mongoose from "mongoose";


const ReplyToComment = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    commentId: {
        type: mongoose.Types.ObjectId,
        ref: "Comments",
        required: true,
    },
    reply: {
        type: String,
        required: true,
        maxLength: 500,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model('ReplyToComment', ReplyToComment);

