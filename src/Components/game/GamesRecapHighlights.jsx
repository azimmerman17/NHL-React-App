import Stack from "react-bootstrap/Stack"

import GamesHighlightCard from './GamesHIghlightCard';

const GamesRecapHighlights = ({ highlights }) => {
  const { gameCenter } = highlights
  const { items } = gameCenter

  const highlightPackage = items.map(item => {
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
        {highlightPackage}
      </div>
    </Stack>
  )
}

export default GamesRecapHighlights