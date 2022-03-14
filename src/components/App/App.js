import React from "react";
import "./App.css";
import Landing from "./Landing";
import Tech from "./Tech";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Landing />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
