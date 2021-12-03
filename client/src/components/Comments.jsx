import React from 'react'
import { useState, useEffect } from 'react'
import { postComment } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export default function Comments({comments}) {
  const [comment, setComment] = useState('')

// useEffect(() => {
//   if (comments) {
//     const foundComment = comments.find(comment => {
//       return comment.id === useParams.id
//     })
//     if (foundComment) {
//       set
//     }
//   }
  
// }, [])

  return (
    <div>
      
    </div>
  )
}
