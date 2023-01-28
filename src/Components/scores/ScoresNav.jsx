import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ScoresNav = ({ gamePk, epg }) => {

  const media = (video) => {
    const result = epg.filter(item => item.title === video)
    const { items, title } = result[0]
    const item = items.filter(item => item.id)
    console.log(item[0].id)
    if (item[0].id) {
      const { id } = item[0]

      return (
        <Button href={`https://www.nhl.com/video/c-${id}`} target='_blank' variant='outline-secondary' style={{width: '125%', height: '100%'}}>
          <small> {title === 'Extended Highlights' ? 'Long Recap' : title}</small>
        </Button>  
      )
    }
    
  }
 
  return (
    <Col xs={1} md={1}>
      <Row style={{height: '33%'}}>
        <Col className='m-0 p-0'>
          <Button variant='outline-secondary' href={`/games/${gamePk}`} style={{width: '125%', height: '100%'}}>
            <small>
              GameCenter
            </small>
          </Button>
        </Col>
      </Row>
      <Row style={{height: '66%'}}>
      <Col>
        <Row style={{height: '50%'}}>
          <Col className='m-0 p-0'>
            {media('Extended Highlights')}
          </Col>
        </Row>
        <Row style={{height: '50%'}}>
          <Col className='m-0 p-0'>
            {media('Recap')}
          </Col>
        </Row>
      </Col>
      </Row>
    </Col>
  )
}

export default ScoresNav