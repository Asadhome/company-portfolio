import { company } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={`mono ${styles.line}`}>
          © {year} {company.name}. All rights reserved.
        </p>
        <p className={`mono ${styles.line}`}>{company.location}</p>
      </div>
    </footer>
  );
}
