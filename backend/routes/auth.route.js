import express from 'express';
import {   google, Signin, signOut, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup); 
router.post("/signin", Signin);
router.post("/google", google);
router.get("/signout", signOut);

export default router;