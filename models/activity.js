import mongoose from "mongoose";


const Activity = new mongoose.Schema({
    consumerId: {
        type: mongoose.Types.ObjectId,
        required: true,
        immutable: true,
    },
    providerId: {
        type: mongoose.Types.ObjectId,
        required: true,
        immutable: true,
    },
    userActivity: {
        
    },
    updateAt: {
        type: Date,
        default: new Date.now,
    },
    createdAt: {
        type: Date,
        default: new Date.now,
        immutable: true
    },
});


export default mongoose.model('Activities', Activity);

