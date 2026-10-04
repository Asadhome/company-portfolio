import Image from "next/image";
import { company } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.brand}>
          <Image src="/logo-mark.png" alt="" width={266} height={178} className={styles.logo} />
          <span className={`mono ${styles.brandText}`}>{company.name}</span>
        </span>
        <p className={`mono ${styles.line}`}>
          © {year} {company.name}. All rights reserved.
        </p>
        <p className={`mono ${styles.line}`}>{company.location}</p>
      </div>
    </footer>
  );
}
