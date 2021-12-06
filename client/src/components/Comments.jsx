import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Comments({ comments }) {
  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')
//   const params = useParams()
//   const navigate = useNavigate()

// useEffect(() => {
//   const foundComment
// }, [])
  
  return (
    <div>
      <label>Username:</label>
      <h3>{username}</h3>
      <label>Comment:</label>
      <h3>{comment}</h3>
    </div>
  )
}
