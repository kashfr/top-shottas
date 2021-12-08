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

  const laughingMemes = [
    "https://media.giphy.com/media/5YF9dwGZ29rVe/giphy.gif",
    "https://media.giphy.com/media/9WqamNCgHN4s0/giphy.gif",
    "https://media.giphy.com/media/UjCwf8qULpZPa/giphy.gif",
    "https://media.giphy.com/media/U1xivDfnrqGx7AJE8P/giphy.gif",
    "https://media.giphy.com/media/Z36diZTBOwJLG/giphy.gif",
  ]

  return (
    <div className="players-container">
     
      { teamPlayers.length !== 0 ? 
        teamPlayers.map((player) => (<div className="players-item">
          <Link key={player.id} to={`/player/${player.id}`}>
            <img src={player.fields.playerImage} alt={player.fields.name}/>
            <h3>{player.fields.name}</h3>
            {/* <p>{player.fields.year}</p> */}
           
          </Link>
          </div>
        )) : <img src={laughingMemes[Math.floor(Math.random() * 6)]} alt="laughing-meme"/>
        }
    </div>
  )
}
