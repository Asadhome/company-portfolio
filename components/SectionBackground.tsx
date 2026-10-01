import CodeBackground from "./CodeBackground";
import styles from "./SectionBackground.module.css";

type Props = {
  snippets: string[];
};

// Drop-in ambient background for a content section: the scrolling code
// layer plus a top/bottom veil so it reads as texture behind the section,
// not as competing text. Sits at z-index 0 — the section's own content
// wrapper needs position: relative + z-index: 1 to layer above it.
export default function SectionBackground({ snippets }: Props) {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <CodeBackground snippets={snippets} opacity={0.16} />
      <div className={styles.veil} />
    </div>
  );
}
