const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const app = express();

app.use(express.json())
app.use(express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(3030, () => {
    // console.log('localhost:3030');
});

app.get('/', async (요청, 응답) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
        params: {
            league: '39',
            season: '2023'
        },
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.response[0].team);
        응답.render('soccer.ejs', { teams: response.data.response });
    } catch (error) {
        console.error(error);
    }
});

app.get('/team', async (요청, 응답) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
        params: {
            league: '39',
            season: '2023'
        },
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };

    try {
        const response = await axios.request(options);
        응답.render('team.ejs', { teams: response.data.response });
    } catch (error) {
        console.error(error);
    }
});

app.get('/rank', async (요청, 응답) => {
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
        params: {
            season: '2023',
            league: '39'
        },
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.response[0].league);
        응답.render('rank.ejs', { ranks : response.data.response[0].league });
    } catch (error) {
        console.error(error);
    }
});
