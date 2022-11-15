import mongoose from "mongoose";


const Subscription = new mongoose.Schema({
    subbedAuthorId: {               // the user who has subscribed
        type: mongoose.Types.ObjectId,
        ref: 'Authors',
        required: true,
        immutable: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Authors',
        required: true,
        immutable: true,
    },
    status: { type: Boolean, required: true },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, immutable: true, default: Date.now },
});


export default mongoose.model('Subscriptions', Subscription);

