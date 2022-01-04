const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API_KEY = require('../../config/api_key');

router.get('/:id/:beginIndex', (req,res) => {
    const accountId = req.params.id;
    const beginIndex = req.params.beginIndex || 0;
    const endIndex = req.params.endIndex || 100;

    fetch(`https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?beginIndex=${beginIndex}&endindex=${endIndex}&api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({path: "/api/summoner-match-history/accountId, beginIndex, endIndex", data}));
});

module.exports = router;