import Stack from 'react-bootstrap/Stack';
import { useState, useEffect } from 'react';

import ScoresDate  from './ScoresDate'
import ScoresCard from './ScoresCard';
import formatDate from '../formatDate';

const Scores = ({ data, setPath, setTitle }) => {
  let [dateObj, changeDateObj] = useState() //may need later?
  let [gameDate, setDate] = useState('')
  let gameData = []
  let pathDate 

  const fetchData = () => {
    if (!dateObj) {
      setPath(`api/v1/schedule?hydrate=team,linescore,broadcasts(all),game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series),scoringplays,decisions`)
    }
    else {
      setPath(`api/v1/schedule?startDate=${pathDate}&endDate=${pathDate}&hydrate=team,linescore,broadcasts(all),game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series),scoringplays,decisions`)
    }
  }

  try {
    const { games, date } = data.dates[0]
    pathDate = date
    games.forEach(game => {
      gameData.push(game)
    });
  } catch (error) {
    console.log(error)
    fetchData()
  }

  useEffect(() => {
    setTitle(`Scores - ${gameDate}`)
    fetchData()
    setDate(pathDate)

  },[dateObj])
  

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
      <ScoresDate date={pathDate} changeDateObj={changeDateObj} />
      <hr/>
      {scoreboard}
    </Stack>
  )
}

export default Scores