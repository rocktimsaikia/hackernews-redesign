import React from "react";
import ZapIcon from "../components/icons/zap";

export default function Footer() {
  return (
    <footer className="text-center font-inter text-sm text-gray-800 font-normal my-5">
      <p>
        Made by <ZapIcon />
        <a
          className="text-blue-600"
          href="http://rocktimsaikia.now.sh"
          target="_blank"
        >
          Rocktim
        </a>
      </p>
    </footer>
  );
}
