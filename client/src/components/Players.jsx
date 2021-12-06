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

  return (
    <div className="players-container">
      {
        teamPlayers.map((player) => (
          <Link key={player.id} to={`/player/${player.id}`}>
            <div className="players-item">
              <img src={player.fields.playerImage} alt={player.fields.name}/>
            <h3>{player.fields.name}</h3>
            <p>{player.fields.year}</p>
            </div>
            </Link>
        ))
      }
    </div>
  )
}
