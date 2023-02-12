import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const GamesHighlightCard = ({ item }) => {
  console.log(item)
  const { id, image, description, blurb } = item
  const { cuts } = image
  let imgWidth = 320
  let imgSrc

  for (const key in cuts ) {
    const { width, src } = cuts[key]
    if (width === imgWidth) {
      imgSrc = src
    }

  }
  return (
    <Card className='bg-white p-2 shadow rounded' style={{ width: '22rem', margin: 'auto'}}>
      <Button href={`https://www.nhl.com/video//c-${id}`} target='_blank' variant='outline-dark'>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{blurb}</Card.Title>
          <Card.Text>
            <small>
              {description}
            </small>
          </Card.Text>
       </Card.Body>
      </Button>
    </Card>
  )
}

export default GamesHighlightCard