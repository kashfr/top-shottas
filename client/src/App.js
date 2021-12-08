import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Players from "./components/Players";
import Player from "./components/Player";
import { useState, useEffect } from "react";
import { getPlayers, getComments } from "./services";
import { Route, Routes } from "react-router-dom";

function App() {
  const [players, setPlayers] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

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
  }, [toggle]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/players/:team" element={<Players players={players} />} />
        <Route
          path="/player/:id"
          element={
            <Player
              players={players}
              setToggle={setToggle}
              comments={comments}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
