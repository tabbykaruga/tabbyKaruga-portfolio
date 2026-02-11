import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skills } from "../constants";

export default function Skills() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, centerMode: false },
  };

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
                control, different architectures including MVVM AND MVC
                architecture and UI/UX design.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                transitionDuration={500}
                centerMode={window.innerWidth > 768}
                arrows={false}
                className="skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item">
                    <img src={skill.img} alt="" />
                    <p className="skills-name">{skill.name}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
