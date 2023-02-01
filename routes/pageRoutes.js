import express from 'express';
import { indexPage, aboutPage } from '../controllers/pageController.js';
const router = express.Router();

router.get('/', indexPage);

router.get('/about', aboutPage);

export default router;
