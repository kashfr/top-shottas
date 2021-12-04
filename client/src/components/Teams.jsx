import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { teams } from '../assets/teams'

export default function Teams() {

  const teamLogos = () => {
    return (
      <div>
        {teams.map((logo, index) => {
          return <img src={logo.image} alt='team logo'
          />
        })}
      </div>
    );
  };
}
