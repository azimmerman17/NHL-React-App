import Table from "react-bootstrap/Table"

import styleColor from "../functions/styleColor"

const GamesBoxscore = ({ teams, periods, hasShootout, lastPlay }) => {
  const { home, away } = teams

  const headings = () => {
    const per = periods.map((period) => {
      const { ordinalNum } = period
      return <th key={ordinalNum}>{ordinalNum}</th>
    })

    const gameTime = () => {
      const { about, result } = lastPlay
      const { description } = result
      const { ordinalNum, periodTimeRemaining } = about 
      if (description === 'Game Official') {
        return <th className='text-center'>Final</th>
      } else {
        return <th className='text-center'>{ordinalNum} / {periodTimeRemaining}</th>
      }
    }

    return (
    <thead>
      <tr>
        {gameTime()}
        {per}
        {hasShootout ? <th>SO</th> : null}
        <th>T</th>
      </tr>
    </thead>
    )
  }

  const body = (team, string) => {
    const  { teamStats } = team
    const { teamSkaterStats } = teamStats
    const { goals } = teamSkaterStats
    const { triCode, id } = team.team

    const scores = periods.map((period) => {
      const { home, away, ordinalNum } = period
      return <th key={`${string}-${ordinalNum}`}>{string === 'home' ? home.goals : away.goals}</th>
    })

    return (
      <tr>
        <th style={{color: styleColor(id)}}>{triCode}</th>
        {scores}
        {hasShootout ? <th>Not Built</th> : null}
        <td>{goals}</td>
      </tr>
    )
  }

  return (
    <Table  className='bg-white text-center p-2 shadow rounded' >
      {headings()}
      <tbody>
        {body(away, 'away')}
        {body(home, 'home')}
      </tbody>
    </Table>
  )
}

export default GamesBoxscore