import express from "express";


// import AuthorRouter from "./userRoutes/author.js";
// import CookbookRouter from "./userRoutes/cookbook.js";
import RecipeRouter from "./userRoutes/recipe.js";
import LikeRouter from "./userRoutes/like.js";
// import RatingRouter from "./userRoutes/rating.js";
import commentRouter from "./userRoutes/comment.js";
import CommentLikeRouter from "./userRoutes/commentLike.js";
import ReplyToCommentRouter from "./userRoutes/replyToComment.js";
import ReplyLikeRouter from "./userRoutes/replyLike.js";
// import SubscriptionRouter from "./userRoutes/subscription.js";

// import AuthorOwnerRouter from "./ownerRoutes/author.js";


export const userRoutes = express.Router();
export const ownerRoutes = express.Router();
// export const adminRouter = express.Router()


// userRoutes.use('/author', AuthorRouter);
// userRoutes.use('/cookbook', CookbookRouter);
userRoutes.use('/recipe', RecipeRouter);
userRoutes.use('/like', LikeRouter);
// userRoutes.use('/rating', RatingRouter);
userRoutes.use('/comment', commentRouter);
userRoutes.use('/commentlike', CommentLikeRouter);
userRoutes.use('/replytocomment', ReplyToCommentRouter);
userRoutes.use('/replylike', ReplyLikeRouter);

// userRoutes.use('/subscription', SubscriptionRouter);

// ownerRoutes.use('/author', AuthorOwnerRouter)

