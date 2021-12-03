import React from 'react'
import { Link } from 'react-router-dom'

export default function Players({players}) {
  return (
    <div>
      {
        players.map((player) => (
          <Link key={player.id} to={`/players/${player.id}`}>{player.fields.name}</Link>
        ))
      }
    </div>
  )
}
