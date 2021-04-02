import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import GithubIcon from "../components/icons/github";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="absolute right-6 top-6">
        <GithubIcon />
      </nav>
      <div className="grid grid-cols-3">
        <Sidebar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
