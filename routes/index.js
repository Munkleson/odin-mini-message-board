const messages = [
    // {
    //   text: "Hi there!",
    //   user: "Amando",
    //   added: new Date()
    // },
    // {
    //   text: "Hello World!",
    //   user: "Charles",
    //   added: new Date()
    // }
  ];

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.render('pages/index', {messages: messages}));
// router.get('/new', (req, res) => res.render('pages/new'));

// router.get('/new', (req, res) => {
//   res.render('form');
// });

router.post('/new', (req, res) => {
  const messageText = req.body.content;
  const messageUser = req.body.author;

  {messages.unshift({ text: messageText, user: messageUser, added: new Date() });}
  res.redirect('/');
});

module.exports = router;