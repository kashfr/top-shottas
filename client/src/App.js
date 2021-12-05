import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Team from "./components/Team";
import Years from "./components/Years";
import Year from "./components/Year";
import Players from "./components/Players";
import Player from "./components/Player";
import Comments from "./components/Comments";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { getPlayers, getComments } from "./services";
import { Route, Routes, Link } from "react-router-dom";
import { teams } from "./assets/teams";

function App() {
  const [players, setPlayers] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);
  // const teams = [];

  useEffect(() => {
    const getAllPlayers = async () => {
      const response = await getPlayers();
      setPlayers(response);
    };
    getAllPlayers();
  }, [toggle]);

  useEffect(() => {
    const getAllComments = async () => {
      const response = await getComments();
      setComments(response);
    };
    getAllComments();
  }, [comments]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/players" element={<Players players={players} />}></Route>
      </Routes>
      <div className="logos">
        <div>
          {/* <teams size={30} /> */}
          {teams.map((team, index) => (
            <img
              key={index}
              src={team.image}
              alt="team logo"
              height={200}
              width={200}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
