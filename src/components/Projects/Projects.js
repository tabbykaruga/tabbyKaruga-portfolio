import { Col, Container, Row, Nav, TabContainer, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectsCard";
import proj1 from "../../assets/img/project-img1.png";
import colorSharpRight from "../../assets/img/color-sharp-right.png";

export default function Projects() {
  const projects = [
    {
      title: "GABS",
      description: "",
      imgUrl: proj1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Diffrent projects worked on ..................</p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">TEXTING</Tab.Pane>
                <Tab.Pane eventKey="third">TEXTING TEXTING</Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharpRight}
        alt="BackgroundImageRight"
      />
    </section>
  );
}
