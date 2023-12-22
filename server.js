const express = require('express');
const axios = require('axios');
const { env } = require('process');
const ejs = require('ejs');
const app = express();

require('dotenv').config();

app.use(express.json())
app.use(express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(3030, () => {
    console.log('localhost:3030에서 실행중');
});

app.get('/', async (요청, 응답) => {
    응답.render('soccer.ejs');
});

app.use('/rank', require('./routes/rank.js'));