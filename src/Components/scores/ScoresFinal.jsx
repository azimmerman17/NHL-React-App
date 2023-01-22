const ScoreFinal = ({ game }) => {
  const { gamePk, teams, status } = game
  const { away, home} = teams
  const { abstractGameState } = status
  return (
    <div key={gamePk}>
    <h6>{`${away.team.name} at ${home.team.name}`}</h6>
    <p>{abstractGameState}</p>
  </div>
  )
}

export default ScoreFinal