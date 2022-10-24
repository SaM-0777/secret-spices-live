export async function getAllComments(req, res) {
    res.send('Hello World Comment!')
};

export async function getAllCommentsByUserId(req, res) {
    res.send(req.params.userId)
};

export async function getAllCommentsByRecipeId(req, res) {

};

export async function getCommentByCommentId(req, res) {

};

export async function createNewComment(req, res) {

};

export async function updateComment(req, res) {

};

export async function deleteComment(req, res) {

};
