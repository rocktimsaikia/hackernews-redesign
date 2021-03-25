import React from "react";
import FireIcon from "./icons/fire";
import TimerIcon from "./icons/timer";
import StatsIcon from "./icons/stats";
import QuestionIcon from "./icons/question";
import CollectionIcon from "./icons/collection";
import DesktopIcon from "./icons/desktop";
import BriefcaseIcon from "./icons/briefcase";
import GithubIcon from "./icons/github";

export default function Sidebar() {
  return (
    <div className="relative w-60">
      <div className="bg-softGray fixed top-0 h-full border-r border-gray-300">
        <div className="flex items-center font-bold text-md text-gray-700 mb-10 py-4 px-8">
          <img
            src="/hn-logo.png"
            alt=""
            srcset=""
            height="30px"
            width="30px"
            className="mr-2 -ml-1"
          />
          Hacker News
        </div>
        <div className="mb-10">
          <h1 className="sidemenu-title">Category</h1>
          <ul>
            <li className="sidemenu-item">
              <CollectionIcon /> All
            </li>
            <li className="sidemenu-item">
              <FireIcon /> Best
            </li>
            <li className="sidemenu-item">
              <TimerIcon /> New
            </li>
            <li className="sidemenu-item">
              <StatsIcon /> Top
            </li>
            <li className="sidemenu-item">
              <QuestionIcon /> Ask
            </li>
            <li className="sidemenu-item">
              <DesktopIcon /> Show
            </li>
            <li className="sidemenu-item">
              <BriefcaseIcon /> Job
            </li>
          </ul>
        </div>
        <div>
          <h1 className="sidemenu-title">Extra</h1>
          <ul>
            <li>
              <a
                href="https://github.com/RocktimSaikia/hacker-news-redesign"
                className="sidemenu-item"
              >
                <GithubIcon /> Github
              </a>
            </li>
            <li className="sidemenu-item cursor-auto">
              <a
                href="https://rocktimsiakia.now.sh"
                className="text-blue-500 mr-1"
              >
                Rocktim Saikia{" "}
              </a>{" "}
              © 2020
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
