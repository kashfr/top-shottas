import React from 'react'
import { useState } from 'react'
import { postComment } from '../services'

export default function Comments({comments, setToggle, id}) {
  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()
  const newComment = {
    username,
    comment,
  }
    await postComment(newComment, id)
    setToggle(prevToggle => !prevToggle)
}
  
  return (
    <form className="comments-section" onSubmit={handleSubmit}>
       <label>username:</label>
      <input
        className="username"
        type='text'
        value={username}
        name='username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>comment:</label>
      <textarea
        className="comment"
        cols="50" 
        rows="2" 
        value={comment}
        name='comment'
        onChange={(e) => setComment(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
