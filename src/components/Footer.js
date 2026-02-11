import { Col, Container, Row } from "react-bootstrap";
import github from "../assets/img/githubLogo.svg";
import linkedIn from "../assets/img/linkedInLogo.svg";
import gmail from "../assets/img/gmail.png";
import download from "../assets/img/download.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-sm-center">
            <div className="social-icon">
              <a href="https://github.com/tabbykaruga">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/tabitha-karuga-099200199/">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a href="mailto:karugatabithamuthoni@gmail.com">
                <img src={gmail} alt="Email" />
              </a>
              <a href="/TabithaKaruga-CV.pdf" download="Tabitha_Karuga_CV.pdf">
                <img src={download} alt="Download CV" />
              </a>
            </div>
            <p>Copyright © {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
