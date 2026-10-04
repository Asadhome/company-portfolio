"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

// In-page link that scrolls to a section without leaving "#section" in the URL.
export default function ScrollLink({
  href,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || !href.startsWith("#")) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
