import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MyExpertise from "./Components/MyExpertise";
import ParticleComponent from "./Components/Particles";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <AnimatedCursor color="10, 0, 0" innerSize={8} outerSize={35} />
      <Navbar />
      <ParticleComponent />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Home />
        <MyExpertise />
      </div>
    </div>
  );
}

export default App;
