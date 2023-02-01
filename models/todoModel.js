import { Joi } from 'express-validation';

const todoModel = {
  body: Joi.object({
    title: Joi.string().required(),
    completed: Joi.boolean().required(),
    email: Joi.string().email().required(),
  }),
};

export { todoModel };
