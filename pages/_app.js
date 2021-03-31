import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}

export default MyApp;
