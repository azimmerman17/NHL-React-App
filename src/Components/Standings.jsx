import { StandingsData } from "../Models/StandingsData"

const Standings = () => {
  const { records } = StandingsData

  const standings = records.map((record, i) => {
    const { name } = record.division
    return (
      <h5 key={name}>{name}</h5>
    )
  })
  return (
    <div>
      <h4>STANDINGS PAGE</h4>
      <div>
      <button>Division</button>
      <button>Wild Card</button>
      <button>Playoffs</button>
      </div>
      {standings}
    </div>

  )
}

export default Standings