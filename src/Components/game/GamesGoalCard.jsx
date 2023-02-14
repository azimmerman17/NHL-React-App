import Stack from "react-bootstrap/Stack"

import styleColor from "../functions/styleColor"

const GamesGoalCard = ({ period }) => {
  const cards = period.map(goal => {
    const { about, players, result, team } = goal
    const { periodTime  } = about
    const { eventCode, strength } = result
    const { name, triCode, id } = team
    const { code } = strength
    let scorer
    let assist = []
    let playerId

    players.forEach(player => {
      const { playerType, seasonTotal } = player
      const { fullName, id } = player.player
      if (playerType === 'Scorer') {
        scorer = `${fullName} (${seasonTotal})`
        playerId = id
      } else if (playerType === 'Assist') {
        assist.push(`${fullName} (${seasonTotal})`)
      }    
    });

    return (
      <div key={eventCode} className=' bg-white p-1 shadow rounded d-flex flex-row'>
          <div style={{width: '60px'}}>
            <img className='rounded-circle' style={{border: `1px solid ${styleColor(id)}`}} src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${playerId}.jpg`} alt='' /> 
          </div>
          <div className='mx-2 my-0'>
            <h6 className='my-1' style={{color: styleColor(id)}}>{scorer}</h6>
            <p className='my-1' style={{fontSize: '12px'}}>{assist.length === 0 ? 'Unassisted' : assist.join(' ')}</p>
            <p className='my-1' style={{fontSize: '12px'}}>
              <span style={{color: styleColor(id)}}>{triCode} </span>
              <span>| {periodTime}</span>
              <span>{code === 'EVEN' ? null : ` | ${code}`}</span>
            </p>
          </div>
      </div>
    )
  })
  return (
    <Stack gap={1}>
      {period.length === 0 ? <p className='bg-white p-2 shadow rounded'><small>No Goals</small></p> : cards}
    </Stack>
  )
}

export default GamesGoalCard
