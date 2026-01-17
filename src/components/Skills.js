import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/skills/react.png";
import flutter from "../assets/img/skills/flutter.png";
import kotlin from "../assets/img/skills/kotlin.png";
import git from "../assets/img/skills/git.png";
import css from "../assets/img/skills/css.png";
import html from "../assets/img/skills/html.png";
import java from "../assets/img/skills/java.png";
import php from "../assets/img/skills/php.png";
import laravel from "../assets/img/skills/laravel.png";
import psql from "../assets/img/skills/psql.png";
import mysql from "../assets/img/skills/mysql.png";
import firebase from "../assets/img/skills/firebase.png";
import figma from "../assets/img/skills/Figma.png";
import androidStudio from "../assets/img/skills/androidStudio.png";
import vsCode from "../assets/img/skills/vsCode.png";
import colorSharpLeft from "../assets/img/color-sharp-left.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      name: "Flutter",
      img: flutter,
    },
    {
      name: "Kotlin",
      img: kotlin,
    },
    {
      name: "Java",
      img: java,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "Laravel",
      img: laravel,
    },
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "PHP",
      img: php,
    },
    {
      name: "Git",
      img: git,
    },
    {
      name: "MySQL",
      img: mysql,
    },
    {
      name: "PSQL",
      img: psql,
    },
    {
      name: "Firebase",
      img: firebase,
    },
    {
      name: "Figma",
      img: figma,
    },
    {
      name: "Android Studio",
      img: androidStudio,
    },
    {
      name: "Visual Studio",
      img: vsCode,
    },
  ];
  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                "I am proficient in a wide range of technologies, including
                mobile and web development frameworks, databases, version
                control, diffrent architectures including MVVM AND MVC
                architecture and UI/UX design.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={500}
                className="skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item">
                    <img src={skill.img} alt="" />
                    <h6>{skill.name}</h6>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharpLeft}
        alt="BackgroundImageLeft"
      />
    </section>
  );
}
