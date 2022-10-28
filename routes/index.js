import express from "express";

import author from './userRoutes/author.js'


export const userRoutes = express.Router();
export const ownerRoutes = express.Router();


userRoutes.use('/author', author);

