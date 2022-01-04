const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Require Routes
const champMastery = require('./api/champ-mastery');
const summonerMasteryId = require('./api/summoner-mastery-id');
const summonerMasteryTotal = require('./api/summoner-mastery-total');
const summonerMatchHistory = require('./api/summoner-match-history');
const summonerMatch = require('./api/summoner-match');
const euwRankedTop = require('./api/euw-ranked-top');
const summoner = require('./api/summoner');

// Middleware
app.use(cors());

// API Endpoints
app.use('/api/champ-mastery', champMastery);
app.use('/api/summoner-mastery-id', summonerMasteryId);
app.use('/api/summoner-mastery-total', summonerMasteryTotal);
app.use('/api/summoner-match-history', summonerMatchHistory);
app.use('/api/summoner-match', summonerMatch);
app.use('/api/euw-ranked-top', euwRankedTop);
app.use('/api/summoner', summoner);
app.use('/*', error);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));