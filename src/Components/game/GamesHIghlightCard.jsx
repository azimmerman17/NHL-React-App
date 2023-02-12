import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import styleColor from '../functions/styleColor';

const GamesHighlightCard = ({ item }) => {
  const { id, image, description, blurb, keywords } = item
  const { cuts } = image
  let imgWidth = 320
  let imgSrc
  let teamId

  keywords.forEach(keyword => {
    const { type, value } = keyword
    if (type === 'teamId') {
      teamId = value
    }
  })

  for (const key in cuts ) {
    const { width, src } = cuts[key]
    if (width === imgWidth) {
      imgSrc = src
    }

  }
  return (
    <Card style={{backgroundColor: styleColor(Number(teamId)), width: '16rem', margin: 'auto'}} className='p-2 shadow rounded' >
      <Button  href={`https://www.nhl.com/video//c-${id}`} target='_blank' variant='outline-secondary'>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body className='text-white'>
          <Card.Title style={{fontSize: '16x'}}>{blurb}</Card.Title>
          <Card.Text style={{fontSize: '12px'}}>{description}</Card.Text>
       </Card.Body>
      </Button>
    </Card>
  )
}

export default GamesHighlightCard