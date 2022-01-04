const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API_KEY = require('../../config/api_key');

router.get('/:id', (req,res) => {
    const summonerId = req.params.id;
    fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${summonerId}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({path: "/api/summoner-mastery-total/summonerId", data}));
});

module.exports = router;