import Stack from "react-bootstrap/Stack"

import styleColor from "../styleColor"

const GamesPenaltyCard = ({ period } ) => {
  const cards = period.map(penalty => {
    const { about, players, result, team } = penalty
    const { periodTime  } = about
    const { eventCode, penaltyMinutes, penaltySeverity, secondaryType } = result
    const { name, triCode } = team
    // const { code } = strength
    let penalizied 
    let playerId

    players.forEach(player => { 
      const { playerType } = player
      const { fullName, id } = player.player
      if (playerType === 'PenaltyOn') {
        penalizied = fullName
        playerId = id
      }
    });

    return (
      <div key={eventCode} className=' bg-white p-1 shadow rounded d-flex flex-row'>
          <div style={{width: '60px'}}>
            <img className='rounded-circle border' src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${playerId}.jpg`} /> 
          </div>
          <div className='mx-2 my-0'>
            <h6 className='my-1' style={{color: styleColor(name)}}>{penalizied}</h6>
            <p className='my-1' style={{fontSize: '12px'}}>{penaltyMinutes} min {penaltySeverity} for {secondaryType}</p>
            <p className='my-1' style={{fontSize: '12px'}}>
              <span style={{color: styleColor(name)}}>{triCode} </span>
              <span>| {periodTime}</span>
            </p>
          </div>
      </div>
    )
  })

console.log(period)

  return (
    <Stack gap={1}>
      {period.length === 0 ? <p><small>No Penalties</small></p> : cards}
    </Stack>
  )
}

export default GamesPenaltyCard

// penalty time
// major / minor
// call