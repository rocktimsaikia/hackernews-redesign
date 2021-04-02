import React from "react";
import Link from "next/link";
import site from "../site.config";

function Sidebar() {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed h-full flex">
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
