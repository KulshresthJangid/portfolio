import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MyExpertise from "./Components/MyExpertise";
import ParticleComponent from "./Components/Particles";

function App() {
  return (
    <div className="App">
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
          flexDirection: "column"
        }}
      >
        <div style={{ marginTop: "250px" }} className="content">
          <Home />
        </div>
          <MyExpertise />
      </div>
    </div>
  );
}

export default App;
