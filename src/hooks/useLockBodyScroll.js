import { useEffect } from "react";

/**
 * Prevents the page behind a modal or drawer from scrolling.
 *
 * @param {boolean} locked - true while the overlay is open
 */
const useLockBodyScroll = (locked) => {
  useEffect(() => {
    if (!locked) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
};

export default useLockBodyScroll;
