import React from "react";
import Link from "next/link";
import site from "../site.config";

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
            {site.tabs.map((tab) => (
              <li>
                <Link href={tab.href}>
                  <a className="sidemenu-item">
                    {tab.icon} {tab.title}
                  </a>
                </Link>
              </li>
            ))}
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