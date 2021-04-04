import React from "react";
import Link from "next/link";
import site from "../site.config";
import useOnClickOutside from "use-onclickoutside";

function Sidebar({ closeMenu }) {
  const ref = React.useRef(null);
  useOnClickOutside(ref, closeMenu);

  return (
    <div className="lg:hidden flex flex-col items-center0">
      <div
        className="fixed top-0 left-0 shadow-xl h-full flex bg-white z-10"
        ref={ref}
      >
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
