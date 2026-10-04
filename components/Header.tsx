import Image from "next/image";
import { company, navItems } from "@/lib/content";
import ScrollLink from "./ScrollLink";
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
        <ScrollLink href="#home" className={styles.logo}>
          <Image src="/logo-mark.png" alt="" width={266} height={178} priority className={styles.logoImg} />
          <span className={styles.logoText}>{company.name}</span>
        </ScrollLink>
        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item, i) => (
            <ScrollLink key={item.href} href={item.href} className={i === 0 ? styles.active : undefined}>
              {item.label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
