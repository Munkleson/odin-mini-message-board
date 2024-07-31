const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

// routers
const newRouter = require('./routes/new');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/new', newRouter);
app.use('/', indexRouter);
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => { console.log(`Now listening on port: ${PORT}`) });