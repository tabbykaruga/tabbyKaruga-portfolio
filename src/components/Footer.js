import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import github from "../assets/img/githubLogo.svg";
import linkedIn from "../assets/img/linkedInLogo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
