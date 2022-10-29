import mongoose from "mongoose";


const Subscription = new mongoose.Schema({
    userId: {               // the user who has subscribed
        type: String,
        required: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Authors',
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model('Subscriptions', Subscription);

