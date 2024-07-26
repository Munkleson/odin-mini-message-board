const { Router } = require('express');

const newRouter = Router();

newRouter.get('/', (req, res) => res.render('pages/new'));

newRouter.get('/new', (req, res) => {
    res.render('form');
  });

module.exports = newRouter;