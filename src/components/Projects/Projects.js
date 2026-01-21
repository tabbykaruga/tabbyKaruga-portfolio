import { Col, Container, Row, Nav, TabContainer, Tab } from "react-bootstrap";
import WebCard from "./WebCard";
import MobileCard from "./MobileCard";
import smartAccess from "../../assets/img/projects/smartAccess.png";
import gabsApp from "../../assets/img/projects/gabs.png";
import gwFaApp from "../../assets/img/projects/gwfa.png";
import ticTacToe from "../../assets/img/projects/tic-tac-toe.png";
import investorApp from "../../assets/img/projects/investor_calculator.png";
import portfolio from "../../assets/img/projects/portfolio.png";
import colorSharpRight from "../../assets/img/color-sharp-right.png";

// npm install react-multi-carousel
 
// npm install react-bootstrap-icons --save
 
// npm install express cors nodemailer
 
// npm server to start the mail server file
 
// npm install animate.css --save
 
// npm install --save react-on-screen
 
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
      imgUrl: portfolio,
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
                    <MobileCard projects={mobileProjects}></MobileCard>
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
