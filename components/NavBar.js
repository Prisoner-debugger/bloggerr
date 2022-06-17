import React from "react";
import Link from "next/link";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h4 className="logo">code-blogger</h4>
      <nav ref={navRef}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <a href="#">Featured</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
