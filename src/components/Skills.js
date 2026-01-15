import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Perc from "../assets/img/80_perc.svg";
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
  return (
    <section className="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I am well verside in diffrent skills and programming practices
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={Perc} alt="" />
                  <h5>Flutter Programming</h5>
                </div>
                <div className="item">
                  <img src={Perc} alt="" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={Perc} alt="" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={Perc} alt="" />
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <img src={Perc} alt="" />
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <img src={Perc} alt="" />
                  <h5>Kotlin</h5>
                </div>
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
