import React from 'react'
import { useParams } from 'react-router-dom'
import Form from "./Form"

export default function Player({ players, comments, setToggle }) {
  const { id } = useParams()

  const player = players.find((player) => {
    return player.id === id
  })
  
  const commentList = comments.filter((comment) => {
    return comment.fields.players[0] === id
  })

  return (
    <div className="player-page">
      <div className="player-details">
      <label>Year(s) Awarded:</label>
      <h2>{player?.fields.year}</h2>
      <img src={player?.fields.playerImage} alt={player?.fields.name}/>
      <h1>{player?.fields.name}</h1>
      <label>Height:</label>
      <h3>{player?.fields.height}</h3>
      <label>Weight:</label>
      <h3>{player?.fields.weight}</h3>
      <label>Position(s):</label>
      <h3>{player?.fields.position}</h3>
      <label>College:</label>
      <h3>{player?.fields.college}</h3>
      <label>High School:</label>
      <h3>{player?.fields.highSchool}</h3>
      <label>Bio:</label>
      <h4>{player?.fields.bio}</h4>
      </div>
      <Form setToggle={setToggle} id={id} />
      {
        commentList.map((comment) => (
          <div className="comments">
            <label>username:
            <p>{comment.fields.comment}</p>
            </label>
            <label>comment:
            <p>{comment.fields.username}</p>
            </label>
          </div>
        ))
      }
    </div>
  )
}
