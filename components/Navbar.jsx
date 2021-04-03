import React from "react";
import GithubIcon from "./icons/github";

export default function Navbar() {
  return (
    <nav className="absolute right-0 top-3 lg:right-6 lg:top-6">
      <a href="https://github.com/rocktimsaikia/hackernews-redesign">
        <GithubIcon />
      </a>
    </nav>
  );
}
