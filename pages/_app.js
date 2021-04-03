import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative flex flex-col">
      <div className="bg-overlay" />
      <div className="relative">
        <Navbar />
        <div className="grid grid-cols-3">
          <Sidebar />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
