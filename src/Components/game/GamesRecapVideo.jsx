const GamesRecapVideo = ({ epg }) => {
  let link

  epg.forEach(program => {
    const { title, topicList } = program
    if (title === 'Extended Highlights') {
      link = topicList
    }
  })

  return (
    <div  className="embed-responsive embed-responsive-16by9">
      <iframe style={{width: '95%', margin:'auto', aspectRatio:'16/9'}} className="embed-responsive-item" src={`https://www.nhl.com/video/embed/t-${link}`} allowFullScreen />
    </div>
  )
}

export default GamesRecapVideo