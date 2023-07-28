import Image from "next/image";
import React from "react";

const logos = ["NodeJS", "Express", "MongoDB", "React", "Redux", "Sass"];

const ProjectOne = () => {
  return (
    <section id="project-1" className="project-1 hidden">
      <div className="project-1__description">
        <h1 className="project-1__description--title">
          E-Commerce full-stack website
        </h1>
        <p className="project-1__description-description">
          Full stack E-Commerce web app built with NodeJS, Express, MongoDB,
          Cloudinary, React, Redux and Sass.
        </p>
        <a href="https://github.com/ClaudiuCurca/ecommerce-app-backend">
          Back-end repository
        </a>
        <a href="https://github.com/ClaudiuCurca/ecommerce-app-frontend ">
          Front-end repository
        </a>
        <a href="https://ecommerce-app-frontend-two.vercel.app/">Live app</a>
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
      <div className="project-1__image-container">
        <img
          src={"/ecom-web-app.png"}
          width={1920}
          height={1080}
          className="project-1__image-container--image"
          alt="ecommerce web app image"
        />
      </div>
    </section>
  );
};

export default ProjectOne;
