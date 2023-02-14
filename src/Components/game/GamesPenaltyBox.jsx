

const GamesPenaltyBox = ({ team }) => {
  const { penaltyBox } = team 
  if (penaltyBox.length === 0) {
    return null
  }
  console.log(team)
  return (
    <div>
      Penalty Box
    </div>
  )
}

export default GamesPenaltyBox