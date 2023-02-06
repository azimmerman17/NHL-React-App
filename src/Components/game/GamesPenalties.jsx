import Stack from "react-bootstrap/Stack"

const GamesPenalties = ({ plays }) => {
  const { allPlays, penaltyPlays } = plays

  const penalties = penaltyPlays.map((penaltyPlay) => {
    const penalty = allPlays[penaltyPlay]
    const { id } = penalty.players[0].player   
    // console.log('penalty', penalty)
    return (
      <div key={penaltyPlay} className='bg-white text-center p-2 shadow rounded'>
        <img src={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${id}.jpg`} />
        <p></p>
    </div>
    )
  })

  return (
    <Stack gap={1}>
      <h4>Penalties</h4>
      {penalties}
    </Stack>
  )
}

export default GamesPenalties