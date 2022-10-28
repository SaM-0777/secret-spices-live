import mongoose from "mongoose";


const AuthorSocials = mongoose.Schema({
    socailName: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
});

const AuthorSchema = mongoose.Schema({
    userId: {
        type: String,
        immutable: true,
        required: true,
        unique: true,
    },
    thumbnail: {
        type: String,
    },
    banner: {
        type: String,
    },
    name: {
        type: String,
        required: true,
        maxLength: 60,
    },
    description: {
        type: String,
        required: true,
        maxLength: 5000,
    },
    authorSocials: {
        type: [AuthorSocials],
        default: []
    },
    location: {
        type: [String],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});


export default mongoose.model('Authors', AuthorSchema);

