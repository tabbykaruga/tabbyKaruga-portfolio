import { Col, Container, Row } from "react-bootstrap";
import github from "../assets/img/githubLogo.svg";
import linkedIn from "../assets/img/linkedInLogo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="mb-4 mb-sm-0">
            <p>Tabitha Muthoni Karuga</p>
            <p>Software Engineer</p>
            <a href="mailto:karugatabithamuthoni@gmail.com" className="">
              karugatabithamuthoni@gmail.com
            </a>
            <p>
              <a href="/TabithaKarugaCV.pdf" download>
                <button className="footer-btn">
                  <span>Download CV</span>
                </button>
              </a>
            </p>
          </Col>
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/tabbykaruga">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/tabitha-karuga-099200199/">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </div>
            <p>Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
