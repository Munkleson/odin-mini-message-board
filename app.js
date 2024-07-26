const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// routers
const newRouter = require('./routes/new');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/new', newRouter);
app.use('/', indexRouter);













app.listen(port, () => { console.log(`Now listening on port: ${port}`) });