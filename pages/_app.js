import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <div className="nav-img">
        <img
          src="https://healthyblogtut.rinodeboer.com/wp-content/uploads/2020/04/Header-image-scaled.jpg"
          alt="/"
        />
      </div> */}
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
