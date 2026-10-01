import { skillGroups } from "@/lib/content";
import { stackSnippets } from "@/lib/codeSnippets";
import SectionBackground from "./SectionBackground";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="stack" className={`section ${styles.bg}`}>
      <SectionBackground snippets={stackSnippets} />
      <div className="container">
        <p className="section-label">
          <span className="idx mono">02</span>
          <span className="mono">stack.yml</span>
        </p>
        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3 className={`mono ${styles.groupLabel}`}>{group.label}</h3>
              <ul className={styles.chips}>
                {group.skills.map((skill) => (
                  <li key={skill} className={`mono ${styles.chip}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
