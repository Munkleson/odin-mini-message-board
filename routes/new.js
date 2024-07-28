const { Router } = require('express');

const newRouter = Router();

newRouter.get('/', (req, res) => res.render('pages/new', {title: "Write your message"}));

newRouter.get('/new', (req, res) => {
    res.render('form');
  });

module.exports = newRouter;