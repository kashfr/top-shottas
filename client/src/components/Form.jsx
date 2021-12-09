import React from 'react'
import { useState } from 'react'
import { postComment } from '../services'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    <Box
      component="form"
      md={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className="comments-section"
      onSubmit={handleSubmit}>
      {/* <label>username:</label> */}
    
      <TextField
          id="outlined-size-small"
          label="Username"
          size="small"
          maxRows={4}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      {/* <input
        className="username"
        type='text'
        value={username}
        name='username'
        onChange={(e) => setUsername(e.target.value)}
      /> */}
      {/* <label>comment:</label> */}
      <TextField
          id="outlined-size-small"
          label="Comment"
          size="small"
          maxRows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      {/* <textarea
        className="comment"
        cols="50" 
        rows="2" 
        value={comment}
        name='comment'
        onChange={(e) => setComment(e.target.value)}
      /> */}
      <Button variant="contained" color="primary">Submit</Button>
      {/* <button>Submit</button> */}
      </Box>
  )
}
