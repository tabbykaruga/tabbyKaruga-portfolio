import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

export default function MobileCard({ projects }) {
  const [atciveProjIndex, setActiveProjIndex] = useState(0);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight")
        setActiveProjIndex((i) => (i + 1) % projects.length);
      if (e.key === "ArrowLeft")
        setActiveProjIndex((i) => (i - 1 + projects.length) % projects.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [projects.length]);

  return (
    <Col xs={12}>
      <div className="mobile-spotlight">
        <div className="mobile-thumbnails">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`thumbnail ${
                atciveProjIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveProjIndex(index)}
            >
              <img src={project.imgUrl} alt={project.title} />
            </div>
          ))}
        </div>

        <div
          className={`mobile-details ${atciveProjIndex !== null ? "show" : ""}`}
        >
          <h4>{projects[atciveProjIndex].title}</h4>
          <p>{projects[atciveProjIndex].description}</p>

          <span className="tech-stack">{projects[atciveProjIndex].stack}</span>

          <div className="project-links">
            <a href={projects[atciveProjIndex].github} target="">
              GitHub
            </a>
            <a href={projects[atciveProjIndex].live} target="">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}
