"use client";
import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import AboutSection from "@/components/AboutSection";
import ProjectOne from "@/components/ProjectOne";
import ProjectTwo from "@/components/ProjectTwo";
import ContactSection from "@/components/ContactSection";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 2;

      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById(
        "projects"
      ) as HTMLElement;
      const projectOneSection = document.getElementById("project-1");
      const projectTwoSection = document.getElementById(
        "project-2"
      ) as HTMLElement;
      const contactSection = document.getElementById("contact") as HTMLElement;

      if (
        aboutSection &&
        currentPosition >= aboutSection.offsetTop &&
        currentPosition < projectsSection.offsetTop
      ) {
        setCurrentSection("about");
      } else if (
        projectsSection &&
        currentPosition >= projectsSection.offsetTop &&
        currentPosition < projectTwoSection.offsetTop
      ) {
        setCurrentSection("projects");

        if (projectOneSection?.classList.contains("hidden")) {
          projectOneSection.classList.remove("hidden");
          projectOneSection.classList.add("appear-slow");
        }
      } else if (
        projectTwoSection &&
        currentPosition >= projectsSection.offsetTop &&
        currentPosition < contactSection.offsetTop
      ) {
        if (projectTwoSection?.classList.contains("hidden")) {
          projectTwoSection.classList.remove("hidden");
          projectTwoSection.classList.add("appear-slow");
        }
      } else if (
        contactSection &&
        currentPosition >= contactSection.offsetTop
      ) {
        setCurrentSection("contact");
        if (contactSection?.classList.contains("hidden")) {
          contactSection.classList.remove("hidden");
          contactSection.classList.add("appear-slow");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Navbar currentSection={currentSection} />
      <ParticlesBackground />

      <AboutSection />

      <div id="projects" className="projects">
        <div className="projects__title">
          <h1 className="projects__title--title">Projects</h1>
        </div>
        <ProjectOne />
        <ProjectTwo />
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
