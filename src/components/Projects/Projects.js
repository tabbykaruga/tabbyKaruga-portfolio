import { Col, Container, Row, Nav, TabContainer, Tab } from "react-bootstrap";
import WebCard from "./WebCard";
import MobileCard from "./MobileCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="project" id="project">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "circInOut" }}
      >
        <Container>
          <Row>
            <Col>
              <div className="project-bx">
                <h2>Projects</h2>
                <p className="project-p">
                  Durring my years of experience I have worked on varous teams
                  and projects. Here are some of the projects which I have
                  worked on or are still working on for both mobile and wed
                  development.
                </p>
                <TabContainer id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mobile Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web App/Websites</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <MobileCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <WebCard />
                    </Tab.Pane>
                  </Tab.Content>
                </TabContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </section>
  );
}
