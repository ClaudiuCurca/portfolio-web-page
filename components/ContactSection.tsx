import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact hidden">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__card">
        <p className="contact__card--linkedin">
          <Image
            src={"/linkedin.svg"}
            height={50}
            width={50}
            alt="linkedIn"
            className="contact__card--linkedin-image"
          />{" "}
          <a href="https://www.linkedin.com/in/claudiu-curca2000/">
            Claudiu Curcă
          </a>
        </p>
        <p className="contact__card--github">
          <Image
            src={"/github.svg"}
            height={50}
            width={50}
            alt="github"
            className="contact__card--github-image"
          />
          <a href="https://github.com/ClaudiuCurca">Claudiu Curcă</a>
        </p>
        <p className="contact__card--gmail">
          <Image
            src={"/gmail.svg"}
            height={50}
            width={50}
            alt="linkedIn"
            className="contact__card--linkedin-image"
          />
          <a href="mailto:curcaclaudiu2000@gmail.com">
            curcaclaudiu2000@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
