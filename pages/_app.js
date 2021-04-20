import "../styles/globals.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import CoffeeCup from "../components/icons/coffeecup";

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Google analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="relative flex flex-col">
      <div className="bg-overlay" />
      <div className="relative flex flex-col mx-6 lg:mx-0 min-h-screen">
        <Navbar openMenu={() => setIsMenuOpen(!isMenuOpen)} />
        <main className="grid grid-cols-1 lg:grid-cols-3 flex-grow">
          <Sidebar />
          {isMenuOpen && <SidebarMobile closeMenu={() => setIsMenuOpen(false)} />}
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </main>
        <Footer />
        <a href="https://www.buymeacoffee.com/rocktimcodes" target="_blank" className="fixed left-5 bottom-6">
          <CoffeeCup />
        </a>
      </div>
    </div>
  );
}

export default MyApp;
