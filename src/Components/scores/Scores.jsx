import Stack from 'react-bootstrap/Stack';
import { useState, useEffect } from 'react';

import ScoresDate  from './ScoresDate'
import ScoresCard from './ScoresCard';

const Scores = ({ data, setPath, setTitle }) => {
  let [dateObj, changeDateObj] = useState({}) //may need later?
  let [pathDate, changeDate] = useState('') //use when changing view date
  let gameData = []
  let gameDate
  
  try {
    const { games, date } = data.dates[0]
    gameDate = date
    games.forEach(game => {
      gameData.push(game)
    });
  } catch (error) {
    console.log(error)
    if (pathDate === '') {
      setPath(`api/v1/schedule?hydrate=team,linescore,broadcasts(all),game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series),scoringplays,decisions`)
    }
    else {
      setPath(`api/v1/schedule?startDate=${pathDate}&endDate=${pathDate}&hydrate=team,linescore,broadcasts(all),game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series),scoringplays,decisions`)
      
    }
  }
  
  useEffect(() => {
    setTitle(`Scores - ${gameDate}`)
  },[gameDate])
  

let scoreboard = gameData.map((game) => {
  const { gamePk } = game

  return (
    <div key={gamePk}>
      <ScoresCard game={game} />
      <hr/>
    </div>
  )
}) 

  return (
    <Stack gap={3}>
      <h2>Scores</h2>
      <hr/>
      <ScoresDate date={gameDate} />
      <hr/>
      {scoreboard}
    </Stack>
  )
}

export default Scores