import React from 'react'
import { useState, useEffect } from 'react'
import { postComment } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export default function Comments({comments, setToggle, id}) {
  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')
  // const params = useParams()
  const navigate = useNavigate()

// useEffect(() => {
//   if (comments) {
//     const foundComment = comments.find(comment => {
//       return comment.id === params.id
//     })
//     if (foundComment) {
//       setComment(foundComment.comment)
//       setUsername(foundComment.username)
//     }
//   }
  
// }, [params.id, comments])

const handleSubmit = async (e) => {
  e.preventDefault()
  const newComment = {
    username,
    comment,
  }
    const response = await postComment(newComment, id)
    setToggle(prevToggle => !prevToggle)
}
  
  return (
    <form onSubmit={handleSubmit}>
      <label>comment:</label>
      <input
        type='text'
        value={comment}
        name='comment'
        onChange={(e) => setComment(e.target.value)}
      />
      <label>username:</label>
      <input
        type='text'
        value={username}
        name='username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
