import React from "react";
import Movies from "./components/Movies/Movies";
import "./App.css";
import YouTube from "react-youtube";

function App() {
  return (
    <div>
      <Movies />
      <YouTube videoId="" />
    </div>
  );
}

export default App;
