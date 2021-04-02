import React from "react";
import Link from "next/link";
import site from "../site.config";

function Sidebar() {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="fixed">
        <div className="flex items-center font-bold text-base text-gray-700 mb-2 px-8">
          <img
            src="/hn-logo.png"
            alt="Hackernews logo"
            height="30px"
            width="30px"
            className="mr-2 -ml-1"
          />
          Hacker News
        </div>
        <div className="flex items-center px-8">
          <ul>
            {site.tabs.map((tab, i) => (
              <li key={i}>
                <Link href={tab.href}>
                  <a className="sidemenu-item">
                    {tab.icon} {tab.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
