import Image from "next/image";
import React from "react";

const logos = ["NextJS", "GraphQL", "tailwind", "Sass"];

const ProjectTwo = () => {
  return (
    <section id="project-2" className="project-2 hidden">
      <div className="project-2__image-container">
        <Image
          src={"/recipes.png"}
          width={1024}
          height={768}
          className="project-2__image-container--image"
          alt="ecommerce web app image"
        />
      </div>
      <div className="project-2__description">
        <h1 className="project-2__description--title">Recipes web app</h1>
        <p className="project-2__description-description">
          Online recipes web app where you can log in, write, search and find
          recipes. Built with NextJS, typescript, NextAuth, tailwind and a
          serverless GraphQL backend using Grafbase.
        </p>
        <a href="https://github.com/ClaudiuCurca/recipe_web_app">Repository</a>
        <a href="https://recipe-web-app-five.vercel.app/">Live app</a>
        <div className="logos">
          {logos.map((logo) => {
            return (
              <div className={`logo__container ${logo}-logo`} key={logo}>
                <Image src={`${logo}.svg`} width={50} height={50} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectTwo;
