import express from 'express';
const router = express.Router();
import { register,login, logout,getUser } from '../controllers/userControllers.js';
import {isAuthorized} from '../middlewares/auth.js'

// POST route for user registration
router.post('/register', register);
router.post("/login", login);
router.get("/logout", isAuthorized,logout);
router.get("/getUser",isAuthorized,getUser);
export default router;
