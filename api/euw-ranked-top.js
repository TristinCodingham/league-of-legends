const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API_KEY = require('../../config/api_key');

router.get('/', (req,res) => {
    fetch(`https://europe.api.riotgames.com/lor/ranked/v1/leaderboards?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({path: "/api/euw-ranked-top", data}));
});

module.exports = router;