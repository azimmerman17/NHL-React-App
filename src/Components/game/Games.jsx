import { useEffect } from "react"  
import { useParams } from "react-router-dom"

import GamesPreview from "./GamesPreview"
import GamesFinal from "./GamesFinal"

import { GamesDataPreview } from "../../Models/GamesPreview"
import { GamesDataLive } from "../../Models/GamesLive"
import GamesLive from "./GamesLive"


const Games = ({ data, setPath, setTitle }) => {
  let { gameId } = useParams()
  const link = `/api/v1/game/${gameId}/feed/live`


  //  // API CONNECTION
  useEffect(() => {
    try {
      const { gameData } = data
      const { teams } = gameData
      const { home, away } = teams

      const code = (team) => {
        const { triCode } = team 
        return triCode
      }

      setTitle(`Game - ${code(away)} @ ${code(home)}`)
    } catch (error){
      console.log(error)
      setPath(link)
    }
  },[data])
  
  const render = () => {
    if (data.gameData) {
      const { gamePk, gameData, liveData } = data
      const { boxscore } = liveData
      const { status } = gameData
      const { abstractGameState } = status

      switch (abstractGameState) {
        case 'Preview':
          data = GamesDataPreview
          return (
            <GamesPreview data={data}/>
          )
        case 'Live':
          data = GamesDataLive 
          return (
            <GamesLive data={data} />
          )
        case 'Final':
          // data = GamesDataLive 
          // return (
          //   <GamesLive data={data} />
          // )
          return (
            <GamesFinal liveData={liveData} />
          )
        default:
          return (
            <div>
              NOT BUILT
            </div>
          )

      }
  
    }
  }
  
  return (
    <div>
      {render()}
    </div>
  )
  
  
}

export default Games