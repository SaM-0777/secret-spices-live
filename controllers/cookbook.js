import Cookbooks from "../models/cookbooks.js"


export async function getAllCookbooks(req, res) {
    try {
        const cookbooks = await Cookbooks.find()
        res.status(200).json(cookbooks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export async function getAllCookbooksByUserId (req, res) {
    const userId = req.params.userId
    try {
        const cookbooksFilterByUserId = await Cookbooks.find({ userId })
        res.status(200).json(cookbooksFilterByUserId)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export async function getCookbookByCookbookId (req, res) {
    const cookbookId = req.params.cookbookId
    console.log(cookbookId)
    try {
        const cookbooksFilterByCookbookId = await Cookbooks.findById(cookbookId)
        res.status(200).json(cookbooksFilterByCookbookId)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export async function createNewCookbook(req, res) {
    const cookbook = new Cookbooks({
        userId: req.body.userId,
        profileImage: req.body.profileImage,
        name: req.body.name,
        description: req.body.description,
        // collections: req.body.collections,
        // recipes: req.body.recipes,
        // subscriptions: req.body.subscriptions,
    })
    try {
        const newCookbook = await cookbook.save()
        res.status(201).json(newCookbook)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export async function updateCookbook (req, res) {

};

export async function deleteCookbook (req, res) {

};
