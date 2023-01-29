import React from "react"
import { useParams } from "react-router-dom"

const Games = ({ data, setPath, setTitle }) => {
  let { gameId } = useParams()
  const link = `/api/v1/game/${gameId}/feed/live`


  console.log(data)

  return (
    <div>
      Game: {gameId}
      {/* teams: {gameData.teams.away.name} @ {gameData.teams.home.name} */}
    </div>
  )
}

export default Games