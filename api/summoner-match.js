const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API_KEY = require('../../config/api_key');

router.get('/:id', (req,res) => {
    const matchId = req.params.id;

    fetch(`https://euw1.api.riotgames.com/lol/match/v4/timelines/by-match/${matchId}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({path: "/api/summoner-match/matchId", data}));
});

module.exports = router;