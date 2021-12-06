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
        <Route path="/players/:team" element={<Players players={players} />} />
        <Route path="/players/years/" element={<Players players={players} />} />
        <Route path="/player/:id" element={<Player players={players} />} />
        <Route
          path="/player/comments/"
          element={<Form comments={comments} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
