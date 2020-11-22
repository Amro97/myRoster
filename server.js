
const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))


const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

let leagueData

urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, response) {
    if (err) {
        throw err;
    }
    leagueData = JSON.parse(data).league.standard
})

app.get('/teams/:teamName', function (req, res) {
    const teamName = req.params.teamName
    const teamId = teamToIDs[teamName]

    const team = leagueData.filter(p => p.teamId === teamId && p.isActive == true)
              .map(s => {return {firstName: s.firstName,
                                lastName: s.lastName,
                                jersey: s.jersey,
                                pos: s.pos}})
                                
    res.send(team)
})

const port = 1301
app.listen(port, function () {
    console.log(`server running on port ${port}`)
})