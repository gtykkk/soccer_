const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const app = express();
const { teams, epl, primera, bundesliga, seria, league1, logo } = require('./apikey.js');

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
    const EPL_RANK = epl;
    const PRIMERA_RANK = primera;
    const BUNDESLIGA_RANK = bundesliga;
    const SERIA_RANK = seria;
    const LEAGUE1_RANK = league1;
    const LOGO = logo;

    try {
        const epl_response = await axios.request(EPL_RANK);
        const primera_response = await axios.request(PRIMERA_RANK);
        const bundesliga_response = await axios.request(BUNDESLIGA_RANK);
        const seria_response = await axios.request(SERIA_RANK);
        const league1_response = await axios.request(LEAGUE1_RANK);
        const logo = await axios.request(LOGO);

        응답.render('rank.ejs', { 
            epl_rank : epl_response.data.response[0].league,
            primera_rank : primera_response.data.response[0].league,
            bundesliga_rank : bundesliga_response.data.response[0].league,
            seria_rank : seria_response.data.response[0].league,
            league1_rank : league1_response.data.response[0].league,
            logo : logo.data
        });
    } catch (error) {
        console.error("rank : ", error);
    }
});

app.get('/copy', async (요청, 응답) => {
    응답.render('rank_copy.ejs');
});