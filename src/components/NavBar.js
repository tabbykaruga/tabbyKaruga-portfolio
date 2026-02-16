import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import github from "../assets/img/githubLogo.svg";
import linkedIn from "../assets/img/linkedInLogo.svg";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  //triggered when scrolling starts
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    //remove when the components is removed from dom
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === "experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </Nav.Link>

            <Nav.Link
              href="#contactMe"
              className={
                activeLink === "contactMe"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contactMe")}
            >
              Contact Me
            </Nav.Link>
          </Nav>
          <div className="social-icon">
            <a href="https://github.com/tabbykaruga">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tabitha-karuga-099200199/">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
