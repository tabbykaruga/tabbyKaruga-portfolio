import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import { mobileProjects } from "../../constants";

export default function MobileCard() {
  return (
    <section className="mobile-projects-bx">
      <div className="projects-grid">
        {mobileProjects.map((app, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-project-logo">
              <img src={app.logo} alt={app.name} />
            </div>
            <h3>{app.name}</h3>
            <p className="project-desc">{app.description}</p>
            <div className="stack-tags">
              {app.stack.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              <a href={app.link}>{i === 0 ? "Google Play Store " : "GitHub"}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
