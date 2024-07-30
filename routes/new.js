const { Router } = require('express');

const newRouter = Router();

const backgroundImageArray = ["https://i.pinimg.com/originals/90/40/03/9040034f5d635f46a4fb92128964fcca.jpg", "https://hips.hearstapps.com/hmg-prod/images/hummingbird-feeding-at-bleeding-heart-bloom-royalty-free-image-1656108706.jpg?crop=0.536xw:1.00xh;0.116xw,0&resize=980:*", 
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAueXA2PdI6l2P6O2xe0RU5DP2ZWu5QmZ_Xg&s",
  // "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/surprising-flower-meanings-balloon-flowers-1650767465.jpg?crop=1xw:1xh;center,top&resize=980:*",
  "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_640.jpg",
  "https://cdn.pixabay.com/photo/2022/09/01/04/40/anemone-7424709_640.jpg",
  "https://cdn.pixabay.com/photo/2023/03/26/07/27/flower-7877708_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/07/12/23/15/flower-6435416_640.jpg",
  "https://cdn.pixabay.com/photo/2014/04/10/11/27/lilac-flower-320874_640.jpg",
  "https://cdn.pixabay.com/photo/2020/07/10/13/40/flower-5390711_640.jpg",
  "https://cdn.pixabay.com/photo/2022/10/07/06/11/verbena-7504222_640.jpg",
  "https://cdn.pixabay.com/photo/2023/02/04/21/32/flowers-7768218_640.jpg",
  "https://cdn.pixabay.com/photo/2022/08/13/09/48/flower-7383308_640.jpg",
  "https://cdn.pixabay.com/photo/2013/07/30/12/28/bouquet-168832_640.jpg",
  "https://cdn.pixabay.com/photo/2020/05/01/13/30/lily-of-the-valley-5117067_640.jpg",
  "https://cdn.pixabay.com/photo/2020/05/25/20/14/dutch-iris-5220407_640.jpg",
  "https://cdn.pixabay.com/photo/2022/06/09/17/16/allium-7252980_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/06/14/50/flower-8044860_640.jpg",
  "https://cdn.pixabay.com/photo/2023/01/05/22/35/flower-7700011_640.jpg",
  "https://cdn.pixabay.com/photo/2019/04/29/03/47/flower-4165137_640.jpg",
  "https://cdn.pixabay.com/photo/2013/09/03/19/05/rose-178682_640.jpg",
  "https://cdn.pixabay.com/photo/2022/07/10/12/44/large-leaved-lupine-7312789_640.jpg",
  "https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_640.jpg",
  "https://cdn.pixabay.com/photo/2021/07/11/12/02/lavender-6403599_640.jpg",
  "https://cdn.pixabay.com/photo/2023/04/23/16/08/flower-7946074_640.jpg",
  "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_640.jpg",
  "https://cdn.pixabay.com/photo/2019/05/07/13/58/magnolias-4186035_640.jpg"

];

newRouter.get('/', (req, res) => res.render('pages/new', {title: "Write your message", backgroundImage: backgroundImageArray}));

newRouter.get('/new', (req, res) => {
    res.render('form');
  });

module.exports = newRouter;