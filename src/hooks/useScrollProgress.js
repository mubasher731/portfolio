import { useEffect, useState } from "react";

/**
 * Reports whether the page has been scrolled past a threshold.
 * Used by the floating "back to top" button.
 *
 * @returns {{ scrolled: boolean }}
 */
const useScrollProgress = (threshold = 24) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold]);

  return { scrolled };
};

export default useScrollProgress;
