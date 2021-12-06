import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Year({players}) {
  const [year, setYear] = useState('')
  const params = useParams()

  useEffect(() => {
    const foundYear = players.find(year => {
     return year.id === params.id
   })
  }, [params.id, year])

  return (
    <div>
      <h2>{players.year}</h2>
      <Link to={`/player/${year.id}`}></Link>
    </div>
  )
}
