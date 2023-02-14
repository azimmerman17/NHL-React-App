import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"

import GamesHighlightCard from "./GamesHIghlightCard"

const GamesLiveHighlights = () => {
  let { gameId } = useParams()
  let [highlightData, setHighlightData] = useState(null)
  const link = `/api/v1/game/${gameId}/content`

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = 'https://statsapi.web.nhl.com/'
      const url = BASE_URL + link
      const response = await fetch(url)     
      const data = await response.json()
      setHighlightData(data)
    }
    if (link.length > 0) {
      fetchData()
    }
  }, [gameId])
  
  if (highlightData) {
    const { highlights } = highlightData
    const { gameCenter } = highlights
    const { items } = gameCenter
  
    const highlightsPackage = items.map(item => {
      const { id } = item
  
      return (
        <div key={id} className='m-2'>
          <GamesHighlightCard item={item} />
        </div>
      )
    })
  
    return (
      <Stack  gap={1}>
        <h4 className='text-center'>Highlights</h4>
        <div className='d-flex flex-wrap' style={{margin: 'auto'}}>
          {highlightsPackage}
        </div>
    </Stack>
    )
  }
}

export default GamesLiveHighlights