import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import { webAppProjects } from "../../constants";

export default function WebCard() {
  return (
    <section className="mobile-projects">
      <div className="projects-grid">
        {webAppProjects.map((web, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="wb-project-logo">
              <img src={web.imgUrl} alt={web.name} />
            </div>
            <h3>{web.name}</h3>
            <p className="project-desc">{web.description}</p>
            <div className="stack-tags">
              {web.stack.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>

            {/* Actions */}
            <div className="project-actions">
              {i !== 2 && <a href={web.link}>GitHub</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
