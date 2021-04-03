import React from "react";
import GithubIcon from "./icons/github";

export default function Navbar() {
  return (
    <nav className="absolute right-6 top-6">
      <a href="https://github.com/rocktimsaikia/hackernews-redesign">
        <GithubIcon />
      </a>
    </nav>
  );
}
