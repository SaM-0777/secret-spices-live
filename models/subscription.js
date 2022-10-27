import mongoose from "mongoose";


const Subscription = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    subscriptionStatus: {
        type: Boolean,
        default: false,
        required: true,
    },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model('Subscriptions', Subscription);

