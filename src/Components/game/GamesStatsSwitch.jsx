import Col from "react-bootstrap/Col"

const GamesStatsSwitch = ({stat, teamStats }) => {
  const { blocked, faceOffWinPercentage, giveaways, hits, pim, powerPlayGoals, powerPlayOpportunities, shots, takeaways } = teamStats
  switch (stat) {
    case 'SOG':
      return (
        <Col>
        <h4>{shots}</h4>
        </Col>
      )
    case 'FO%':
      return (
        <Col>
        <h4>{faceOffWinPercentage}</h4>
        </Col>
      )
    case 'PP':
      return (
        <Col>
        <h4>{powerPlayGoals}/{powerPlayOpportunities}</h4>
        </Col>
      )
    case 'BLKS':
      return (
        <Col>
          <h4>{blocked}</h4>
        </Col>
      )
    case 'HITS':
      return (
        <Col>
          <h4>{hits}</h4>
        </Col>
      )
    case 'TKA':
      return (
        <Col>
          <h4>{takeaways}</h4>
        </Col>
      )
    case 'PIM':
      return (
        <Col>
          <h4>{pim}</h4>
        </Col>
      )
    case 'GVA':
      return (
        <Col>
          <h4>{giveaways}</h4> 
        </Col>
      )
    default:
      return (
        <Col>
          <p>Missing</p>
        </Col>
      )
  }
  
}

export default GamesStatsSwitch