import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"
import { Button } from "react-bootstrap"

const GamesPreviewArticle = () => {
  let { gameId } = useParams()
  let [contentData, setContentData] = useState({})
  const link = `/api/v1/game/${gameId}/content`
  let imgWidth = 640
  let imgSrc

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
    const { editorial } = contentData
    const { preview } = editorial
    const { items } = preview
    if (items.length) {
      const { seoTitle, url, media } = items[0]
      const { image } = media
      const { cuts } = image
  
      for (const key in cuts ) {
        const { width, src } = cuts[key]
        if (width === imgWidth) {
          imgSrc = src
        }
      }
  
      return (
        <Stack gap={2} className='p-2 shadow rounded bg-white'>
          <h5>{seoTitle}</h5>
          <Button href={`https://www.nhl.com/${url}`} target='_blank' className='rounded' variant='white'>
            <img src={imgSrc} className='rounded' />
          </Button>
        </Stack>
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

export default GamesPreviewArticle