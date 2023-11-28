import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <ParticleComponent />
      <div
        style={{
          position: "relative",
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "320px",
          flexDirection: "column",
        }}
      >
        <h1>
          <b>Hi, I'm Kulshresth Jangid</b>
        </h1>
        <Typewriter
          onInit={(typewriter) => {
            const strings = [
              "Software Engineer",
              "Full Stack Developer",
              // Add more strings as needed
            ];

            typewriter
              .typeString(strings[0])
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .typeString(strings[1])
              .callFunction(() => {
                console.log("Second string typed out!");
              })
              // Continue with additional strings if needed
              .start();
          }}
        />
      </div>
    </div>
  );
};

const ParticleComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000",
          },
          links: {
            color: "#000",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 0.3,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Home;
