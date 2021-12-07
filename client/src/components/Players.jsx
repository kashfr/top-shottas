import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Players({ players }) {
  const [teamPlayers, setTeamPlayers] = useState(null)
  const { team } = useParams()
  
useEffect(() => {
  const filteredPlayers = players.filter((player) => {
   return player.fields.team === team
  })
  setTeamPlayers(filteredPlayers)
}, [team, players])
  
  if (!teamPlayers) return <h1>Loading...</h1>

  const mjMeme = [
    "https://c.tenor.com/c9P0jhEZ5QAAAAAd/laugh-michael-jordan.gif",
    "https://c.tenor.com/nl2iUgRdwloAAAAd/laughing-michael-jordan.gif"
  ]

  return (
    <div className="players-container">
      { teamPlayers.length !== 0 ? 
        teamPlayers.map((player) => (
          <Link key={player.id} to={`/player/${player.id}`}>
            <div className="players-item">
            <img src={player.fields.playerImage} alt={player.fields.name}/>
            <h3>{player.fields.name}</h3>
            <p>{player.fields.year}</p>
            </div>
            </Link>
        )) : <img src={mjMeme[Math.floor(Math.random() * 2)]} alt="mj-meme"/>
      }
    </div>
  )
}
