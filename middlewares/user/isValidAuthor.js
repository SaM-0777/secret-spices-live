import mongoose from "mongoose";


export default async function (req, res, next) {
    const { cookbookId } = req.params
    if (!mongoose.Types.ObjectId.isValid(cookbookId)) return res.status(404).json({ messgae: 'Object not found!' })
    next()
};

