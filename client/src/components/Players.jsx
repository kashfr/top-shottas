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
}, [team])
  
  if (!teamPlayers) return <h1>Loading...</h1>

  return (
    <div>
      {
        teamPlayers.map((player) => (
          <Link key={player.id} to={`/player/${player.id}`}>{player.fields.name}</Link>
        ))
      }
    </div>
  )
}
