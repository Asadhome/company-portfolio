import { company, navItems } from "@/lib/content";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titlebar}>
        <span className={`${styles.dot} ${styles.r}`} />
        <span className={`${styles.dot} ${styles.y}`} />
        <span className={`${styles.dot} ${styles.g}`} />
        <span className={styles.titlebarText}>
          {company.shortName.toLowerCase()}@build — zsh — 100×32
        </span>
      </div>
      <div className={styles.navrow}>
        <a href="#home" className={styles.logo}>
          &lt;<b>{company.name.charAt(0).toUpperCase()}</b>/&gt; {company.name}
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item, i) => (
            <a key={item.href} href={item.href} className={i === 0 ? styles.active : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
