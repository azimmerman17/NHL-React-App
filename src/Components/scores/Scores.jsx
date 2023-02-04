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
    fetchData()
  },[])
  
// console.log(gameData.length)
  let scoreboard = () => {
    if (gameData.length === 0) {
      return (
        <div className='bg-white text-center p-2 shadow rounded'>
          <h4>No Games Today</h4>
        </div>
      )
    }
    let games = gameData.map((game) => {
      const { gamePk } = game

      return (
        <div key={gamePk} className='bg-white text-center p-2 shadow rounded'>
          <ScoresCard game={game} />
        </div>
      )
    }) 
    return games
  }

  return (
    <Stack gap={2}>
      <Stack gap={2} className='bg-white text-center p-2 shadow rounded' >
        <h2>Scores</h2>
        <hr/>
        <ScoresDate date={!defaultDate ? new Date : defaultDate} setTitle={setTitle}/>
      </Stack>
      {scoreboard()}
    </Stack>
  )
}

export default Scores