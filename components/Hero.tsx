import { company } from "@/lib/content";
import { heroSnippets } from "@/lib/codeSnippets";
import CodeBackground from "./CodeBackground";
import ScrollLink from "./ScrollLink";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <CodeBackground snippets={heroSnippets} opacity={0.15} />
      <div className={`${styles.veil} ${styles.veilV}`} aria-hidden="true" />
      <div className={`${styles.veil} ${styles.veilH}`} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className={`mono ${styles.prompt}`}>
          <span className={styles.promptSign}>guest@{company.shortName.toLowerCase()}</span>
          <span className={styles.promptMuted}>:~$</span> whoami
        </p>
        <h1 className={styles.name}>
          {company.name}
          <span className={styles.cursor} aria-hidden="true" />
        </h1>
        <p className={`mono ${styles.role}`}>{company.tagline}</p>
        <p className={styles.bio}>{company.summary}</p>
        <ul className={styles.stats} aria-label="Company stats">
          {company.stats.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <span className={`mono ${styles.statValue}`}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>
        <div className={styles.ctas}>
          <ScrollLink href="#work" className={`mono ${styles.btnPrimary}`}>
            See our work
          </ScrollLink>
          <ScrollLink href="#contact" className={`mono ${styles.btnGhost}`}>
            Start a project
          </ScrollLink>
        </div>
        <p className={`mono ${styles.mail}`}>
          <span className={styles.promptMuted}>email:</span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>
    </section>
  );
}
