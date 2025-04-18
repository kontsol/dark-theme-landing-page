import "./App.css";
import ContentImageBlock from "./components/ContentImageBlock";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <section className="container py-5">
      <Header />
      <Hero />
      <Testimonials />
      <ContentImageBlock />
      <Reviews />
    </section>
  );
}

export default App;
