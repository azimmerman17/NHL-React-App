import Carousel from 'react-bootstrap/Carousel';
import Stack from "react-bootstrap/Stack"

import GamesHighlightCard from './GamesHIghlightCard';

const GamesRecapHighlights = ({ highlights }) => {
  const { gameCenter } = highlights
  const { items } = gameCenter

  const highlightPackage = items.map(item => {
    const { id } = item

    return (
      <Carousel.Item key={id}>
        <GamesHighlightCard item={item} />
      </Carousel.Item>

    )
  })

  return (
    <Stack  gap={1}>
      <h4 className='text-center'>Highlights</h4>
      <Carousel >
      {highlightPackage}
      </Carousel>
    </Stack>
  )
}

export default GamesRecapHighlights

{/* <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="holder.js/800x400?text=First slide&bg=373940"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="holder.js/800x400?text=Second slide&bg=282c34"
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="holder.js/800x400?text=Third slide&bg=20232a"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel> */}