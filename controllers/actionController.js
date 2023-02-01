import { todos } from '../data.js';
import { nanoid } from 'nanoid';

const addTodo = async (req, res) => {
  try {
    const { title, email, completed } = req.body;

    const newTodo = {
      id: nanoid(6),
      title,
      email,
      completed,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

export { addTodo };
