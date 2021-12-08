import React, { useState } from 'react'

export default function Comments({ comments }) {
  
  return (
    <div>
      <label>Username:</label>
      <h3>{username}</h3>
      <label>Comment:</label>
      <h3>{comment}</h3>
    </div>
  )
}
