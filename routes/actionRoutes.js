import express from 'express';
import { validate } from 'express-validation';
import { addTodo } from '../controllers/actionController.js';
import { todoModel } from '../models/todoModel.js';
const router = express.Router();

router.post('/', validate(todoModel), addTodo);

export default router;
