import { projects } from "@/lib/content";
import { workSnippets } from "@/lib/codeSnippets";
import SectionBackground from "./SectionBackground";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="work" className={`section ${styles.bg}`}>
      <SectionBackground snippets={workSnippets} />
      <div className="container">
        <p className="section-label">
          <span className="idx mono">03</span>
          <span className="mono">work/</span>
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.slug} className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <span className={`mono ${styles.category}`}>{project.category}</span>
                  <h3 className={styles.title}>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>
                <span className={`mono ${styles.platform}`}>{project.platform}</span>
              </div>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag} className={`mono ${styles.tag}`}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
