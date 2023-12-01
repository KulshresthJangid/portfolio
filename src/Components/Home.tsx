import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section
    id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: 'black'
      }}
    >
      <h1>
        <b>Hi, I'm Kulshresth Jangid</b>
      </h1>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          const strings = [
            "Software Engineer",
            "Full Stack Developer",
            "NodeJs Developer",
            "Java Developer",
            "Backend Developer",
            "Video Editor",
            "Freelance Developer",
          ];

          typewriter
            .typeString(strings[0])
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2000)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .typeString(strings[1])
            .callFunction(() => {
              console.log("Second string typed out!");
            })
            .pauseFor(2000)
            .deleteAll()
            .typeString(strings[2])
            .callFunction(() => {
              console.log("Second string typed out!");
            })
            .pauseFor(2000)
            .deleteAll()
            .typeString(strings[3])
            .callFunction(() => {
              console.log("Second string typed out!");
            })
            .pauseFor(2000)
            .deleteAll()
            .typeString(strings[4])
            .callFunction(() => {
              console.log("Second string typed out!");
            })
            .pauseFor(2000)
            .deleteAll()
            .typeString(strings[5])
            .callFunction(() => {
              console.log("Second string typed out!");
            })
            // Continue with additional strings if needed
            .start();
        }}
      />
    </section>
  );
};

export default Home;
