import "./App.css";
import ContentImageBlock from "./components/ContentImageBlock";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Testimonials from "./components/Testimonials";
import EarlyAccessSignup from "./components/EarlyAccessSignup";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="pt-5">
      <Header />
      <Hero />
      <Testimonials />
      <ContentImageBlock />
      <Reviews />
      <div className="footer-wrapper">
        <EarlyAccessSignup />
        <Footer />
      </div>
    </section>
  );
}

export default App;
