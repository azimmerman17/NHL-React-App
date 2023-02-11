import GamesTableRowData from "./GamesTableRowData"

const GamesTableRows = ({ player, statsHeadings }) => {
  const {  person } = player
  const { id } = person

  const stats = statsHeadings.map(stat => {
    return <GamesTableRowData key={`${id}-${stat}`}player={player} stat={stat} />
  })

  return (
    <tr>
      {stats}
    </tr>
  )
}

export default GamesTableRows