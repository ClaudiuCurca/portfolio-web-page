import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <h1 className="about__title">About me</h1>

      <div className="about__card">
        <p className="about__card--description mb-1">
          Hello, I'm Claudiu, a passionate and ambitious aspiring Full Stack
          Developer. I'm currently honing my skills in various technologies,
          including JavaScript, TypeScript, Node.js, MongoDB, Express, GraphQL,
          React, Redux, and Next.js.
        </p>
        <p className="about__card--description mb-1">
          My journey towards becoming a Full Stack Developer is fueled by a
          desire to bridge the gap between creativity and functionality. Through
          continuous learning and staying up-to-date with industry trends, I'm
          committed to honing my craft and making a meaningful impact in the
          digital landscape.
        </p>
        <p className="about__card--description">
          When I'm not coding, I love to play video games, reading books and
          spending time with friends.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
