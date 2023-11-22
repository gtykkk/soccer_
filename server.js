const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const app = express();
const { TEAM_API, teams, rank} = require('./apikey.js');

app.use(express.json())
app.use(express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(3030, () => {
    // console.log('localhost:3030');
});

app.get('/', async (요청, 응답) => {
    응답.render('soccer.ejs');
});

app.get('/team', async (요청, 응답) => {
    const TEAM_API = teams;

    try {
        const response = await axios.request(TEAM_API);
        응답.render('team.ejs', { teams: response.data.response });
    } catch (error) {
        console.error("team : ", error);
    }
});

app.get('/rank', async (요청, 응답) => {
    const RANK_API = rank;

    try {
        const response = await axios.request(RANK_API);
        응답.render('rank.ejs', { ranks : response.data.response[0].league });
    } catch (error) {
        console.error("rank : ", error);
    }
});
