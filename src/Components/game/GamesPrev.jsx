import { useEffect, useState } from "react"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styleColor from "../functions/styleColor"
import GamesPrevGamesList from "./GamesPrevGamesList"

const GamesPrev = ({ gameData }) => {
  let [link, setLink] = useState('')
  let [prevGamesData, setPrevGamesData] = useState({})
  const { datetime, teams } = gameData
  const  { dateTime } = datetime
  const { home, away } = teams

  const teamId = (team) => {
    const { id } = team
    return id
  }

  const code = (team) => {
    const { triCode, id } = team
    return <h5 className='text-center' style={{color:styleColor(id)}}>{triCode}</h5>
  }

  const homeId = teamId(home)
  const awayId = teamId(away)

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = 'https://statsapi.web.nhl.com/'
      const url = BASE_URL + link
      const response = await fetch(url)     
      const data = await response.json()
      setPrevGamesData(data)
    }
    if (link.length > 0) {
      fetchData()
    }
  }, [link])

  return (
    <Stack gap={1}>
      <h6>Last 2 Weeks</h6>
      <Container className='bg-white p-2 shadow rounded'>
        <Row>
          <Col>
            {code(away)}
            <GamesPrevGamesList prevGamesData={prevGamesData} teamId={awayId} otherId={homeId} setLink={setLink} dateTime={dateTime}  />
          </Col>
          <Col>
            {code(home)}
            <GamesPrevGamesList prevGamesData={prevGamesData} teamId={homeId} otherId={awayId} setLink={setLink} dateTime={dateTime} />
          </Col>
        </Row>
      </Container>
    </Stack>
  )

  

}

export default GamesPrev