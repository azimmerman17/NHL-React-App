import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"

import GamesRecapArticle from './GamesRecapArticle'
import GamesRecapHighlights from "./GamesRecapHighlights"

const GamesRecap = () => {
  let { gameId } = useParams()
  let [contentData, setContentData] = useState({})
  const link = `/api/v1/game/${gameId}/content`
  console.log(contentData)
  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = 'https://statsapi.web.nhl.com/'
      const url = BASE_URL + link
      const response = await fetch(url)     
      const data = await response.json()
      setContentData(data)
    }
    if (link.length > 0) {
      fetchData()
    }
  }, [gameId])

  const render = () => {
    if (contentData.editorial) {
      const { editorial, highlights, media } = contentData
      const { recap } = editorial
      const { items } = recap
      const { epg } = media
      const article = () => {
        if (items.length) {
          return <GamesRecapArticle recap={items[0]} epg={epg}/>

        }
      }

      return (
        <Stack gap={2}>
          {article()}
          <GamesRecapHighlights highlights={highlights} />
        </Stack>
      )
    }
  }

  return (
    <div>
     {render()}
    </div>
  )
}

export default GamesRecap