const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API_KEY = require('../../config/api_key');

router.get('/:id', (req,res) => {
    const champId = req.params.id;
    fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${champId}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({path: "/api/champ-mastery/champId", data}));
});

module.exports = router;