import Stack from 'react-bootstrap/Stack';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ScoresDate  from './ScoresDate'
import ScoresCard from './ScoresCard';

const Scores = ({ data, setPath, setTitle }) => {
  const { gameDate } = useParams()
  let gameData = []
  let defaultDate = gameDate ? gameDate : undefined

  const fetchData = () => {
    if (!gameDate) {
      setPath(`api/v1/schedule?hydrate=team,linescore,broadcasts(all),game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series),scoringplays,decisions`)
    }
    else {
      setPath(`api/v1/schedule?startDate=${gameDate}&endDate=${gameDate}&hydrate=team,linescore,broadcasts(all),game(content(media(epg)),seriesSummary),radioBroadcasts,metadata,seriesSummary(series),scoringplays,decisions`)
    }
  }

  try {
    const { games, date } = data.dates[0]
    defaultDate = date
    games.forEach(game => {
      gameData.push(game)
    });
  } catch (error) {
    console.log(error)
    fetchData()
  }

  useEffect(() => {
    setTitle(`Scores - ${defaultDate}`)
    fetchData()
  },[])
  

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
      <ScoresDate date={defaultDate} />
      <hr/>
      {scoreboard}
    </Stack>
  )
}

export default Scores