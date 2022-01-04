const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API_KEY = require('../../config/api_key');

router.get('/:name', (req,res) => {
    const summonerName = req.params.name.split(" ").join("%20");
    fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({path: "/api/summoner/name", data}));
});

module.exports = router;