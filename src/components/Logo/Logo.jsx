'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from '/public/logo.svg';
import logoP from '/public/logo-p.svg';
import Link from "next/link";

const Logo = () => {

  const [offset, setOffset] = useState(0);
  const [pageWidth, setPageWidth] = useState(1024);

  useEffect(() => {
    const width = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", width);
  }, []);

  useEffect(() => {
    if (pageWidth > 1023) {
      const onScroll = () => setOffset(window.scrollY);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [pageWidth]);

  const logoImage = () => {
    if (offset < 500) {
      return logo;
    }
    return logoP;
  };

  const width = () => {
    if (offset < 500) {
      return "150";
    }
    return "53";
  };

  return (
    <div width="150px" className="logo_header logo_header_pos_relative">
      <Link
        className="logo"
        href="/"
      >
        <Image
          src={logoImage()}
          width={width()}
          alt="Логотип Pict.design" 
          className="footer__logo"/>
      </Link>
    </div>
  );
};

export default Logo;
