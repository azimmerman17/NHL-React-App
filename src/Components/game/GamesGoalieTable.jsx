import Table from "react-bootstrap/Table"
import GamesTableRows from "./GamesTableRows"


const GamesGoalieTable = ({ positionName, team }) => {
  const { goalies, players } = team
  let playerList = []

  const GoalieStats = [
    '#',
    'pos',
    'W/L',  // decision
    'TOTAL',  // saves - shots
    'SV%',  // savePercentage 
    'EV',  // evenSaves - evenShotsAgainst
    'PP',  // powerPlaySaves - powerPlayShotsAgainst
    'SH',  // shortHandedSaves - shortHandedShotsAgainst
    'PIM',  // pim
    'TOI',  // timeOnIce
  ]

  goalies.forEach(goalie => {
    let key = `ID${goalie}`
    let player

    for (const objKey in players)  {
      if (key === objKey) {
        player = players[key]
        const { position } = player
        const { type } = position
        if (type === positionName) {
          playerList.push(player)
        } 
      }
    }
  }) 

  const goalieHeaders = GoalieStats.map(heading => {
      return <th key={heading} style={{backgroundColor:'#ececec'}}>{heading === 'pos' ? positionName : heading}</th>
  })

  const tableBody = playerList.map(player => {
    const {  person } = player
    const { id } = person

    return <GamesTableRows key={id} player={player} statsHeadings={GoalieStats}/>
  })

  return (
    <div>
      <Table className='text-center'>
        <thead>
          <tr>
            {goalieHeaders}
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    </div>
  )
}

export default GamesGoalieTable