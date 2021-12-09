import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Players({ players }) {
  const [teamPlayers, setTeamPlayers] = useState(null);
  const { team } = useParams();

  useEffect(() => {
    const filteredPlayers = players.filter((player) => {
      return player.fields.team.toLowerCase().includes(team.toLowerCase());
    });
    setTeamPlayers(filteredPlayers);
  }, [team, players]);

  if (!teamPlayers) return <h1>Loading...</h1>;

  const laughingMemes = [
    "https://i.imgur.com/IMORDvQ.gif",
    "https://i.imgur.com/Xq18obt.gif",
    "https://i.imgur.com/k0LqU5e.gif",
    "https://i.imgur.com/hg5GbQj.gif",
  ];

  return (
    <div className="players-container">
      {teamPlayers.length !== 0 ? (
        teamPlayers.map((player) => (
          <div className="players-item">
            <Card sx={{ maxWidth: 345 }}>
              <Link key={player.id} to={`/player/${player.id}`}>
                <CardMedia
                  component="img"
                  height="340"
                  image={player.fields.playerImage}
                  alt={player.fields.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {player.fields.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {player.fields.year}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </div>
        ))
      ) : (
        <img
          src={laughingMemes[Math.floor(Math.random() * 4)]}
          alt="laughing-meme"
        />
      )}
    </div>
  );
}
