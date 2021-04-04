import React from "react";
import GithubIcon from "./icons/github";
import MenuIcon from "./icons/menu";

export default function Navbar({ openMenu }) {
  return (
    <nav className="lg:mb-0 mb-8">
      <div
        className="absolute left-0 top-3 lg:left-6 lg:top-6 lg:hidden"
        onClick={openMenu}
      >
        <MenuIcon />
      </div>
      <a
        className="absolute right-0 top-3 lg:right-6 lg:top-6"
        href="https://github.com/rocktimsaikia/hackernews-redesign"
      >
        <GithubIcon />
      </a>
    </nav>
  );
}
