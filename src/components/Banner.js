/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Banner() {
  const [loopRolesNum, setLoopRolesNum] = useState(0);
  //Controls whether text is being typed or deleted.
  const [isDeleting, setIsDeleteing] = useState(false);
  const toRotate = ["Software Engineer", "Mobile Developer", "Web Developer"];
  const [roles, setRoles] = useState("");
  //Controls typing speed (interval time in milliseconds).
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  //How long to pause after a word is fully typed
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      rolesAnimation();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [roles]);

  const rolesAnimation = () => {
    let i = loopRolesNum % toRotate.length;
    let fullRoles = toRotate[i];
    let updatedRoles = isDeleting
      ? fullRoles.substring(0, roles.length - 1)
      : fullRoles.substring(0, roles.length + 1);

    setRoles(updatedRoles);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedRoles === fullRoles) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleting && updatedRoles === "") {
      setIsDeleteing(false);
      setLoopRolesNum(loopRolesNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi I'm Tabitha Karuga`}</h1>
                  <h2>
                    <span className="wrap"> {roles}</span>
                  </h2>
                  <p>
                    I am a growth-oriented and passionate Software Engineer with
                    3+ years of experience in end-to-end software development.
                    Skilled in both mobile and web applications, with hands-on
                    expertise across frontend and backend technologies. Adept at
                    collaborating within cross-functional teams and working
                    proactively to deliver cutting-edge, scalable mobile apps
                    and websites.
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/tabitha-karuga-099200199/",
                      )
                    }
                  >
                    Let's connect
                    <ArrowRightCircle size={28} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
