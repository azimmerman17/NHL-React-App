import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import getTime from '../getTime';

const ScoresTime = ({ gameDate, broadcasts, abstractGameState, linescore }) => {
  const  { currentPeriodOrdinal, currentPeriodTimeRemaining, currentPeriod } =linescore

  const media = () => {
    let tv = ['ESPN+'] 
    broadcasts.forEach((broadcast) => {
      const { name, type, site } = broadcast
        if (type === 'national'  && site !== 'nhlCA') {
          tv =  [...tv, ` ${name}`]
        }
        if (name === 'TNT' || name === 'NHLN' || name === 'ESPN+') {
          tv.shift()
        }
    })
    return <small className='m-0'>{tv.toString()}</small>
  }

  switch (abstractGameState) {
    case 'Preview':
      return (
        <Col xs={1} md={1} className='text-end me-3'>
          <Row>
            <Col>{getTime(gameDate)}</Col>
          </Row>
          <Row>
            <Col className='mt-1'>{media()}</Col>
          </Row>
        </Col>
      )
    case 'Live':
      return (
        <Col xs={1} md={1} className='text-end me-3'>
          <Row>
            <Col>{currentPeriodOrdinal}</Col>
          </Row>
          <Row>
            <Col className='mt-1'>{currentPeriodTimeRemaining === 'END' ? 'Int' : currentPeriodTimeRemaining}</Col>
          </Row>
        </Col>
      )
    case 'Final':
      return (
        <Col xs={1} md={1} className='text-end me-3'>
          <Row>
            <Col>Final</Col>
          </Row>
          <Row>
            <Col className='mt-1'>{currentPeriod > 3 ? currentPeriodOrdinal : null}</Col>
          </Row>
        </Col>
      )
  }
}

export default ScoresTime