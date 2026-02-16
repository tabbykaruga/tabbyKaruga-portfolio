import { Container, Row, Col } from "react-bootstrap";
import { myExperiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

export default function Experiences() {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <div className="experience-bx">
              <h2>Work Experience</h2>
              <VerticalTimeline>
                {myExperiences.map((el, index) => {
                  return (
                    <VerticalTimelineElement
                      key={el.id}
                      date={el.date}
                      dateClassName="date"
                      icon={
                        <img
                          src={el.icon}
                          alt={el.company_name}
                          iconStyle={{
                            background: "#000",
                            border: "1px solid rgba(255,255,255,0.3)",
                          }}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: "50%",
                          }}
                        ></img>
                      }
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="vertical-timeline-element-title">
                          {el.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {el.company_name}
                        </h4>
                        <p>{el.description}</p>
                        {el.technologies && (
                          <div className="tech-stack">
                            {el.technologies.map((tech, i) => (
                              <span key={i} className="tech-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
