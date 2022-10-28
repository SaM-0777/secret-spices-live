import Author from "../models/author.js";


export async function getAllAuthors (req, res) {
    try {
        const authors = await Author.find()
        res.status(200).json(authors)
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
};


export async function getAuthorsDisplay(req, res) {
    const query = Author.aggregate([
        {
            $lookup: {
                from: "Recipes",
                localField: "_id",
                foreignField: "authorId",
                as: "Recipes"
            }
        },
        {
            $lookup: {
                from: "Subscriptions",
                localField: "_id",
                foreignField: "authorId",
                as: "Subscriptions"
            }
        },
        {
            $project: {
                thumbnail: 1,
                name: 1,
                recipeCount: { $size: "$Recipes" },
                subscriptionCount: { $size: "$Subscriptions" }
            }
        }
    ]).allowDiskUse(true)

    query.exec(function (error, authorDataForDisplay) {
        if (error) return res.status(500).json({ message: error.message })
        res.status(200).json(authorDataForDisplay)
    })
};


export async function getAuthorDetailsByAuthorId (req, res) {
    const { authorId } = req.params
    
}

