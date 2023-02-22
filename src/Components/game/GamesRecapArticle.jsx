import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import { BsTwitter } from 'react-icons/bs'

import GamesRecapVideo from "./GamesRecapVideo"

const GamesRecapArticle = ({ recap, epg }) => {
  const { headline, subhead, seoDescription, url, contributor } = recap
  const { contributors, source } = contributor
  let contributorList = []
  let contributorTwitterList =[]

  contributors.forEach(contributor => {
    const { name, twitter } = contributor
    contributorList.push(name)
    contributorTwitterList.push(twitter)
  })

  const authors = contributorList.map((author, i) => {
    return (
    <div className='p-4 text-secondary' style={{fontSize: '12px'}} key={i}>
      <span>{author}</span> 
      <span> {contributorTwitterList[i] !== null ? <a target="_blank" href={`https://twitter.com/${contributorTwitterList[i]}`}><BsTwitter style={{color: '#1d9bf0'}}/></a> : null}</span>
      <span> - {source}</span>
    </div>
    )
  })


  return (
    <Stack className='bg-white p-2 shadow rounded' gap={1}>
      <h3 className='text-center'>{headline}</h3>
      <p className='text-secondary text-center'>{subhead}</p>
      {authors} 
      <GamesRecapVideo epg={epg} />
      <p>{seoDescription}</p>
      <Button style={{maxWidth: '200px', margin: 'auto'}} target="_blank" href={`https://www.nhl.com/${url}`}>Read Story</Button>
    </Stack>
  )
}

export default GamesRecapArticle