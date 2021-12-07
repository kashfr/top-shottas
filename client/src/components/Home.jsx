import React from 'react'
import { teams } from "../assets/teams";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="logos-container">
      {teams.map((team, index) => (
         <Link to={`/players/${team.name}`}>
           <img
             key={index}
             src={team.image}
             alt={team.name}
             height={150}
             width={150}
           />
         </Link>
          ))}
    </div>
  )
}
