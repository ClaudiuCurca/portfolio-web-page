"use client";

import Image from "next/image";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <button onClick={handleScrollToTop} className="footer__scroll-to-top">
        <Image src={"/arrow-up.svg"} height={25} width={25} alt="arrow-up" />
      </button>
      <span className="footer__copyright">Claudiu Curcă @ 2023</span>
    </div>
  );
};

export default Footer;
