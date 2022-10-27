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
    const { userId } = req.params
    try {
        const cookbooksFilterByUserId = await Cookbooks.find({ userId })
        res.status(200).json(cookbooksFilterByUserId)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export async function getCookbookByCookbookId (req, res) {
    const { cookbookId } = req.params
    try {
        const cookbooksFilterByCookbookId = await Cookbooks.findById(cookbookId)
        res.status(200).json(cookbooksFilterByCookbookId)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    /**
     * add info like no. of recipes
     * add info like no. of collections
     * add info like no. of subscribers
     */
};

export async function createNewCookbook(req, res) {
    const { userId, profileImage, name, description } = req.body
    const cookbook = new Cookbooks({
        userId: userId,
        profileImage: profileImage,
        name: name,
        description: description,
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

export async function updateCookbook(req, res) {
    const { cookbookId } = req.params
    const { profileImage, name, description } = req.body

    const cookbook = await Cookbooks.findById(cookbookId)

    res.status(200).send('ok')

};

export async function deleteCookbook(req, res) {
    const { cookbookId } = req.params
    const cookbook = await Cookbooks.findById(cookbookId)
    try {
        await cookbook.remove()
        res.status(202).json('Successful')
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
};
