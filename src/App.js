import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Experiences from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Banner />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contactMe">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default App;
