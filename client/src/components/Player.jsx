import React from 'react'
import { useParams } from 'react-router-dom'

export default function Player({ players }) {
  const { id } = useParams()

  const player = players.find((player) => {
    return player.id === id
  })
  
  return (
    <div>
      <img src={player.fields.playerImage} alt={player.fields.name}/>
      <h1>{player.fields.name}</h1>
    </div>
  )
}
