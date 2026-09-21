import { useEffect } from "react";

/**
 * Runs a callback when the Escape key is pressed.
 *
 * @param {Function} handler - called on Escape
 * @param {boolean} enabled - only listen while true
 */
const useEscapeKey = (handler, enabled = true) => {
  useEffect(() => {
    if (!enabled) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") handler(event);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handler, enabled]);
};

export default useEscapeKey;
