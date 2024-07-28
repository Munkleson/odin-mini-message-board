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

const backgroundImageArray = ["https://i.pinimg.com/originals/90/40/03/9040034f5d635f46a4fb92128964fcca.jpg", "https://hips.hearstapps.com/hmg-prod/images/hummingbird-feeding-at-bleeding-heart-bloom-royalty-free-image-1656108706.jpg?crop=0.536xw:1.00xh;0.116xw,0&resize=980:*", 
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAueXA2PdI6l2P6O2xe0RU5DP2ZWu5QmZ_Xg&s",
  // "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/surprising-flower-meanings-balloon-flowers-1650767465.jpg?crop=1xw:1xh;center,top&resize=980:*",
  "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_640.jpg",
  "https://cdn.pixabay.com/photo/2022/09/01/04/40/anemone-7424709_640.jpg",
  "https://cdn.pixabay.com/photo/2023/03/26/07/27/flower-7877708_1280.jpg",
];

const lightBackgroundImageArray = ["https://cdn.pixabay.com/photo/2023/03/26/07/27/flower-7877708_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_640.jpg",
]

const { text } = require('body-parser');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.render('pages/index', {messages: messages, title: "A love message"}));
// router.get('/new', (req, res) => res.render('pages/new'));

// router.get('/new', (req, res) => {
//   res.render('form');
// });

router.post('/new', (req, res) => {
  const messageText = req.body.content;
  const messageUser = req.body.author;
  // const backgroundImageArray = req.body.backgroundImageArray;

  let randomBackground = Math.floor(Math.random() * backgroundImageArray.length);
  const backgroundImage = backgroundImageArray[randomBackground];
  let lightnessCheck;
  let fromTextColor;
  let messageTextColor;

  if (lightBackgroundImageArray.includes(backgroundImage)){
    lightnessCheck = "lightBackgroundTextDiv";
    fromTextColor = "lightFromTextColor";
    messageTextColor = "lightMessageTextColor";
  } else {
    lightnessCheck = "notLightBackgroundTextDiv";
    fromTextColor = "notLightFromTextColor";
    messageTextColor = "notLightMessageTextColor";
  }
  {messages.unshift({ text: messageText, user: messageUser, added: new Date(), backgroundImageArray: backgroundImage, 
    lightnessCheck: lightnessCheck, fromTextColor: fromTextColor, messageTextColor: messageTextColor});}
  res.redirect('/');
});

module.exports = router;