const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API_KEY = require('../../config/api_key');

router.get('/:summonerId/:champId', (req,res) => {
    const summonerId = req.params.summonerId;
    const champId = req.params.champId;
    fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}/by-champion/${champId}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({path: "/api/summoner-mastery-id/summonerId, champId", data}));
});

module.exports = router;