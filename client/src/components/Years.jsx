import React from 'react'
import { Link } from 'react-router-dom'

export default function Years({players}) {

  return (
    <div>
       {
        players.map((year) => (
          <Link key={year.id}to={`/years/${year.id}`}>{players.year}</Link>
        ))
      }
    </div>
  )
}
