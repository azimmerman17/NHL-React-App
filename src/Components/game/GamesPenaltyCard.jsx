import Stack from "react-bootstrap/Stack"

import styleColor from "../functions/styleColor"

const GamesPenaltyCard = ({ period } ) => {
  const cards = period.map(penalty => {
    const { about, players, result, team } = penalty
    const { periodTime  } = about
    const { eventCode, penaltyMinutes, penaltySeverity, secondaryType } = result
    const { name, triCode, id } = team
    let penalizied 
    let drewBy
    let servedBy
    let playerId

    players.forEach(player => { 
      const { playerType } = player
      const { fullName, id } = player.player
      if (playerType === 'PenaltyOn') {
        penalizied = fullName
        playerId = id
      } else if (playerType === 'DrewBy') {
        drewBy = fullName
      } else if (playerType === 'ServedBy') {
        servedBy = fullName
      }

    });

    return (
      <div key={eventCode} className='bg-white p-1 shadow rounded d-flex flex-row'>
          <div style={{width: '60px'}}>
            <img className='rounded-circle' style={{border: `1px solid ${styleColor(id)}`}} src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${playerId}.jpg`} alt='' /> 
          </div>
          <div className='mx-2 my-0'>
            <h6 className='my-1' style={{color: styleColor(id)}}>{penalizied}</h6>
            <p className='my-1' style={{fontSize: '12px'}}>{penaltyMinutes} min {penaltySeverity} for {secondaryType}{drewBy ? ` against ${drewBy}` : null}{servedBy ? ` served by ${servedBy}` : null}.</p>
            <p className='my-1' style={{fontSize: '12px'}}>
              <span style={{color: styleColor(id)}}>{triCode} </span>
              <span>| {periodTime}</span>
            </p>
          </div>
      </div>
    )
  })

  return (
    <Stack gap={1}>
      {period.length === 0 ? <p className='bg-white p-2 shadow rounded'><small>No Penalties</small></p> : cards}
    </Stack>
  )
}

export default GamesPenaltyCard
