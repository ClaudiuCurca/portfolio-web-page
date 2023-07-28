"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "@/particlesConfig";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <div id="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        // @ts-ignore
        options={particlesConfig}
      />
    </div>
  );
};

export default ParticlesBackground;
