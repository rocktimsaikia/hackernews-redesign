import React from "react";
import Link from "next/link";
import site from "../site.config";

function Sidebar() {
  return (
    <div className="relative w-40">
      <div className="flex flex-col fixed top-0 h-full ml-6 mt-6">
        <div className="flex items-center font-bold text-md text-gray-700 mb-10 py-4 px-8">
          <img
            src="/hn-logo.png"
            alt="Hackernews logo"
            height="30px"
            width="30px"
            className="mr-2 -ml-1"
          />
          Hacker News
        </div>
        <div className="mb-10">
          <ul className="mt-4">
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
        <ul className="mt-auto py-4">
          <li className="non-sidemenu-item">
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
  );
}

export default React.memo(Sidebar);
