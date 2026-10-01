"use client";

import { useEffect, useRef } from "react";
import styles from "./CodeBackground.module.css";

// Ambient, decorative background: faint columns of real code drifting
// upward on loop. Duplicated client-side so the CSS translateY(-50%) loop
// is seamless without shipping the content twice in the initial HTML.
// Reused across every section with a different snippet set (lib/codeSnippets.ts)
// so the motion feels tied to what that section covers.
const DURATIONS = [58, 71, 64, 76];
const DELAYS = [0, -14, -32, -6];

type Props = {
  snippets: string[];
  opacity?: number;
};

export default function CodeBackground({ snippets, opacity = 0.16 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate each column's content once, client-side, so the 0 -> -50%
    // scroll animation loops seamlessly.
    const cols = ref.current?.querySelectorAll(`.${styles.col}`);
    cols?.forEach((col) => {
      col.innerHTML += col.innerHTML;
    });
  }, [snippets]);

  return (
    <div className={styles.codebg} style={{ opacity }} aria-hidden="true" ref={ref}>
      {snippets.map((snippet, i) => (
        <pre
          key={i}
          className={styles.col}
          style={{
            animationDuration: `${DURATIONS[i % DURATIONS.length]}s`,
            animationDelay: `${DELAYS[i % DELAYS.length]}s`,
          }}
        >
          {snippet}
        </pre>
      ))}
    </div>
  );
}
