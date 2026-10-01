import { services } from "@/lib/content";
import { servicesSnippets } from "@/lib/codeSnippets";
import SectionBackground from "./SectionBackground";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={`section ${styles.bg}`}>
      <SectionBackground snippets={servicesSnippets} />
      <div className="container">
        <p className="section-label">
          <span className="idx mono">01</span>
          <span className="mono">services.json</span>
        </p>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <article key={service.title} className={styles.card}>
              <span className={`mono ${styles.index}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.stack}>
                {service.stack.map((item) => (
                  <li key={item} className={`mono ${styles.stackItem}`}>
                    {item}
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
