import { todos, info } from '../data.js';

const indexPage = (req, res) => {
  try {
    res.render('index', {
      pageTitle: 'Niels 🫶🏻 Mehdi 🚀 de masters!',
      todos,
    });
  } catch (error) {
    console.error(error);
  }
};
const aboutPage = (req, res) => {
  try {
    res.render('about', info);
  } catch (error) {
    console.error(error);
  }
};

export { indexPage, aboutPage };
