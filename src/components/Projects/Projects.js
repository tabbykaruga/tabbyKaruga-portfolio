import { Col, Container, Row, Nav, TabContainer, Tab } from "react-bootstrap";
import WebCard from "./WebCard";
import MobileCard from "./MobileCard";
import proj1 from "../../assets/img/project-img1.png";
import smartAccess from "../../assets/img/smartAccess.jpg";
import gabsApp from "../../assets/img/GABS.jpg";
import gwFaApp from "../../assets/img/GWFA.jpg";
import ticTacToe from "../../assets/img/tic-tac-toe.png";
import investorApp from "../../assets/img/invester-web.png";
import colorSharpRight from "../../assets/img/color-sharp-right.png";

export default function Projects() {
  const mobileProjects = [
    {
      title: "Smart Access",
      description:
        "A cutting-edge mobile applications for the healthcare sector, focusing on delivering seamless user experiences and scalable solutions.",
      imgUrl: smartAccess,
    },
    {
      title: "Global Women Fitness App",
      description: "A workout app forcused on women and diffrent excersises.",
      imgUrl: gwFaApp,
    },
    {
      title: "GABS",
      description:
        "Garbage collection App thats helps find the nearest private garbage collectors near them based on their location.",
      imgUrl: gabsApp,
    },
  ];

  const webAppProjects = [
    {
      title: "Tic Tac Toe Game",
      description: "A website with the game of tic tac toe.",
      imgUrl: ticTacToe,
    },
    {
      title: "Investor Web App",
      description: "A website thats helps you caculate the diffrent.",
      imgUrl: investorApp,
    },
    {
      title: "Portfolio",
      description: "The current website your see all the projects",
      imgUrl: proj1,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Durring my years of experience I have worked on varous teams and
              projects. Here are some of the projects which I have worked on or
              are still working on for both mobile and wed development.
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
                  <Row>
                    {mobileProjects.map((project, index) => {
                      return <MobileCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {webAppProjects.map((project, index) => {
                      return <WebCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
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
