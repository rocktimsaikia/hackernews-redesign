import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative flex flex-col">
      <div className="bg-overlay" />
      <div className="relative">
        <Navbar />
        <div className="grid grid-cols-3">
          <Sidebar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
