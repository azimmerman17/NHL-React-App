import Stack from "react-bootstrap/Stack"
import { BsStarFill } from 'react-icons/bs' 

import styleColor from "../functions/styleColor"

const GamesStarsofGame = ({ decisions, boxscore }) => {
  const { firstStar, secondStar, thirdStar } = decisions
  const { teams } = boxscore
  const { home, away } = teams
  
  const card = (star) => {
    const { fullName, id } = star
    let objKey = `ID${id}`
    let playerTeam
    let player

    if (objKey in home.players) {
      const { players, team } = home
      for (const key in players) {
        if (key === objKey)
          player = players[key]
        }
      playerTeam = team
    } else {
      const { players, team } = away
      for (const key in players) {
        if (key === objKey)
          player = players[key]
        }
      playerTeam = team
    }
    const { position, stats } = player
    const { triCode, } = playerTeam

    const statline = (stats) => {
      if (position.name === 'Goalie') {
        const { goalieStats } = stats
        const { savePercentage, saves } = goalieStats

      return `${savePercentage} SV% | ${saves} Saves`
      } 
      const { skaterStats } = stats
      const { goals, assists, timeOnIce } = skaterStats

      return `${goals} G | ${assists} A | ${goals + assists} Pts | ${timeOnIce} TOI`
    } 
    
    return (
      <div key={id} className='p-1 d-flex flex-row'>
        <div style={{width: '60px'}}>
          <img className='rounded-circle border' src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${id}.jpg`} alt=''/> 
        </div>
        <div className='mx-2 my-0'>
          <h6 className='my-1' style={{color: styleColor(playerTeam.id)}}>{fullName}</h6>
          <p className='my-1' style={{fontSize: '12px'}}>{statline(stats)}</p> 
          <p className='my-1' style={{fontSize: '12px'}}>
            <span style={{color: styleColor(playerTeam.id)}}>{triCode} </span>
            <span>| {position.name}</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <Stack gap={1}>
      <h4> Stars of the Game</h4>
      <div className='bg-white p-1 shadow rounded'>
        <h6 style={{color: 'gold'}}><BsStarFill /></h6>
        <hr className='m-1'/>
        {card(firstStar)}
      </div>
      <div className='bg-white p-1 shadow rounded'>
        <h6 style={{color: 'gold'}}><BsStarFill /><BsStarFill /></h6>
        <hr className='m-1'/>
        {card(secondStar)}
      </div>
      <div className='bg-white p-1 shadow rounded'>
        <h6 style={{color: 'gold'}}><BsStarFill /><BsStarFill /><BsStarFill /></h6>
        <hr className='m-1'/>
        {card(thirdStar)}
      </div>
    </Stack>

  )
}

export default GamesStarsofGame

