const router = require('express').Router();
const { epl, primera, bundesliga, seria, league1, logos } = require('../apikey.js');
const axios = require('axios');

router.get('/epl', async (요청, 응답) => {
    const EPL_RANK = epl;
    const LOGO = logos;

    try {
        const epl_response = await axios.request(EPL_RANK);
        const logo = await axios.request(LOGO);

        응답.render('rank.ejs', { epl_rank: epl_response.data.response[0].league, logo: logo.data });
    } catch (error) {
        console.error("rank : ", error);
    }
});

router.get('/primera', async (요청, 응답) => {
    const PRIMERA_RANK = primera;
    const LOGO = logos;

    try {
        const primera_response = await axios.request(PRIMERA_RANK);
        const logo = await axios.request(LOGO);

        응답.render('rank.ejs', { primera_rank: primera_response.data.response[0].league, logo: logo.data });
    } catch (error) {
        console.error("rank : ", error);
    }
});

router.get('/bundesliga', async (요청, 응답) => {
    const BUNDESLIGA_RANK = bundesliga;
    const LOGO = logos;

    try {
        const bundesliga_response = await axios.request(BUNDESLIGA_RANK);
        const logo = await axios.request(LOGO);

        응답.render('rank.ejs', { bundesliga_rank: bundesliga_response.data.response[0].league, logo: logo.data });
    } catch (error) {
        console.error("rank : ", error);
    }
});

router.get('/seria', async (요청, 응답) => {
    const SERIA_RANK = seria;
    const LOGO = logos;

    try {
        const seria_response = await axios.request(SERIA_RANK);
        const logo = await axios.request(LOGO);

        응답.render('rank.ejs', { seria_rank: seria_response.data.response[0].league, logo: logo.data });
    } catch (error) {
        console.error("rank : ", error);
    }
});

router.get('/league1', async (요청, 응답) => {
    const LEAGUE1_RANK = league1;
    const LOGO = logos;

    try {
        const league1_response = await axios.request(LEAGUE1_RANK);
        const logo = await axios.request(LOGO);

        응답.render('rank.ejs', { league1_rank: league1_response.data.response[0].league, logo: logo.data });
    } catch (error) {
        console.error("rank : ", error);
    }
});

module.exports = router;