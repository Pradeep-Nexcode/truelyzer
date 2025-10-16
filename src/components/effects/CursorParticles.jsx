"use client"; // if using Next.js 13+

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const CursorParticles = () => {
  const particlesInit = async (engine) => {
    // Loads tsparticles package bundle
    await loadFull(engine);
  };

  return (
    <Particles
      id="cursor-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 9999 },
        particles: {
          number: { value: 0 }, // particles will be emitted by emitter
          color: { value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"] },
          shape: { type: "circle" },
          opacity: { value: 1 },
          size: { value: { min: 2, max: 5 } },
          move: { enable: true, speed: 2, outModes: { default: "destroy" } },
        },
        emitters: {
          direction: "none",
          life: { count: 0, duration: 0.1, delay: 0 },
          rate: { delay: 0.01, quantity: 5 }, // particles emitted per frame
          size: { width: 1, height: 1 },
          position: { x: 50, y: 50 },
          particles: { collisions: { enable: true } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "trail" },
            onClick: { enable: false },
          },
          modes: {
            trail: {
              delay: 0.1,
              quantity: 5,
              particles: {
                color: { value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"] },
                size: { value: { min: 2, max: 5 } },
                move: { speed: 2, outModes: { default: "destroy" } },
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default CursorParticles;
