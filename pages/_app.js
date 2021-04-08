import "../styles/globals.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import CoffeeCup from "../components/icons/coffeecup";

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative flex flex-col">
      <div className="bg-overlay" />
      <div className="relative mx-6 lg:mx-0">
        <Navbar openMenu={() => setIsMenuOpen(!isMenuOpen)} />
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <Sidebar />
          {isMenuOpen && (
            <SidebarMobile closeMenu={() => setIsMenuOpen(false)} />
          )}
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
        <Footer />
        <a
          href="https://www.buymeacoffee.com/7BdaxfI"
          target="_blank"
          className="fixed left-5 bottom-6"
        >
          <CoffeeCup />
        </a>
      </div>
    </div>
  );
}

export default MyApp;
