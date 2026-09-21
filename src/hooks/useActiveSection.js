import { useEffect, useState } from "react";

/**
 * Tracks which page section is currently in the viewport.
 * Powers the active state of the navbar links.
 *
 * @param {string[]} ids - section ids without the leading "#"
 * @param {string} rootMargin - IntersectionObserver root margin
 * @returns {string} the id of the active section
 */
const useActiveSection = (ids, rootMargin = "-45% 0px -50% 0px") => {
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join("|");

  useEffect(() => {
    const sectionIds = key ? key.split("|") : [];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin, threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key, rootMargin]);

  return active;
};

export default useActiveSection;
