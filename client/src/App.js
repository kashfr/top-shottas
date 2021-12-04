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
import { Route, Routes } from "react-router-dom";
import { teams } from "./assets/teams";

function App() {
  const [players, setPlayers] = useState([]);
  const [comments, setComments] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    const getAllPlayers = async () => {
      const response = await getPlayers();
      setPlayers(response);
    };
    getAllPlayers();
  }, []);

  useEffect(() => {
    const getAllComments = async () => {
      const response = await getComments();
      setComments(response);
    };
    getAllComments();
  }, []);

  // useEffect(() => {
  //   const getAllLogos = async () => {
  //     const response = await getPlayers();
  //     setLogos(response);
  //   };
  //   getAllLogos();
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/players" element={<Players players={players} />}></Route>
        {/* <Route
          path="/"
          element={<Teams teams={players.fields.teamLogo} />}
        ></Route> */}
      </Routes>
      <div className="birds">
        {teams.map((team) => (
          <img src={teams} alt="team logo" />
        ))}
      </div>
    </div>
  );
}

export default App;
