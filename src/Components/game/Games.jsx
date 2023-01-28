import React from "react"
import { useParams } from "react-router-dom"

const Games = ({ data, setPath, setTitle }) => {
  let { gameId } = useParams()
  console.log(gameId)

  return (
    <div>
      Game: {gameId}
    </div>
  )
}

export default Games