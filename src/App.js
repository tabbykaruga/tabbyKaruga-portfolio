import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Experiences from "./components/Experience";
import TopSeparator from "./components/TopSeparator";
import BottomSeparator from "./components/BottomSeparator";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Banner />
      </section>
      <TopSeparator />
      <div className="body-content">
        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>
        <section id="projects" data-aos="fade-up">
          <Projects />
        </section>
        <section id="experience" data-aos="fade-up">
          <Experiences />
        </section>
      </div>
      <BottomSeparator />
      <div className="footer-content">
        <section id="contactMe">
          <ContactMe />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
