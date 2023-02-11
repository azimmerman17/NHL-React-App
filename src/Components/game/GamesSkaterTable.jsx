import Table from "react-bootstrap/Table"
import GamesTableRows from "./GamesTableRows"

const GamesPositionTable =({ positionName, team }) => {
  const { players, skaters } = team
  let playerList = []

  const SkaterStats = [
    '#',
    'pos',
    'G',  // 'goals',
    'A',  // 'assists',
    'P',  // 'points',
    '+/-',  // 'plusMinus',
    'PIM',  // 'penaltyMinutes',
    'S',  // 'shots',
    'H',  // 'hits',
    'BLK',  // 'blocked',
    'GVA',  // 'giveaways',
    'TKA',  // 'takeaways',
    'FO%',  // 'faceOffPct', 'faceOffWins' / 'faceoffTaken'
    'TOI',  // 'timeOnIce'
    'PP TOI',  // 'powerPlayTimeOnIce',
    'SH TOI'  // 'shortHandedTimeOnIce',
  ]

  skaters.forEach(skater => {
    let key = `ID${skater}`
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

  const skaterHeaders = SkaterStats.map(heading => {
      return <th key={heading} style={{backgroundColor:'#ececec'}}>{heading === 'pos' ? positionName : heading}</th>
  })

  const tableBody = playerList.map(player => {
    const {  person } = player
    const { id } = person

    return <GamesTableRows key={id} player={player} statsHeadings={SkaterStats}/>
  })

  return (
    <div>
      <Table className='text-center'>
        <thead>
          <tr>
            {skaterHeaders}
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    </div>
  )
}

export default GamesPositionTable