import React from 'react'
import { teams } from "../assets/teams";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      {teams.map((team, index) => (
         <Link to={`/players/${team.name}`}>
           <img
             key={index}
             src={team.image}
             alt={team.name}
             height={150}
             width={150}
             className="logos"
           />
         </Link>
          ))}
    </div>
  )
}
