import React from 'react'
import { teams } from "../assets/teams";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {teams.map((team, index) => (
         <Link to={`/players/${team.name}`}>
           <img
             key={index}
             src={team.image}
             alt="team logo"
             // height={200}
             // width={200}
           />
         </Link>
          ))}
    </div>
  )
}
