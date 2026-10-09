import { useEffect, useRef, useState } from "react";

const NOTICE_MS = 3600;

/**
 * Best-effort deterrence for media that should not be casually copied.
 *
 * Be clear about the limit: a screenshot is taken by the operating system
 * (Cmd+Shift+3/4, Snipping Tool, any phone, or a camera), so no web page can
 * prevent one. This hook only raises friction and leaves a trace:
 *
 *   - refuses the context menu, drag-to-save and copy on the protected element
 *   - overwrites the clipboard when PrintScreen is pressed (Windows/Linux)
 *   - surfaces a notice so the visitor knows the content is protected
 *
 * The PrintScreen listener is armed only while the protected media is on screen
 * (or while `active` is true, e.g. a lightbox is open), so the rest of the page
 * is not affected. Pair with <Watermark /> and the `print-hidden` class for the
 * full layer.
 *
 * @param {object} options
 * @param {React.RefObject} [options.targetRef] - element whose visibility arms the guard
 * @param {boolean} [options.active]   - force the guard on regardless of scroll position
 * @param {string}  [options.message]  - notice text shown on a detected attempt
 * @returns {{ notice: string|null, guardProps: object }}
 */
const useContentProtection = ({ targetRef, active = false, message } = {}) => {
  const [notice, setNotice] = useState(null);
  const armed = useRef(active);

  useEffect(() => {
    if (active) {
      armed.current = true;
      return undefined;
    }

    const target = targetRef?.current;
    if (!target || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        armed.current = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
      armed.current = false;
    };
  }, [active, targetRef]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = setTimeout(() => setNotice(null), NOTICE_MS);
    return () => clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    const onKeyUp = async (event) => {
      if (event.key !== "PrintScreen" && event.code !== "PrintScreen") return;
      if (!armed.current) return;

      // The capture is already on the clipboard by the time the key is seen,
      // so overwriting it is the only counter-measure available.
      try {
        await navigator.clipboard.writeText("");
      } catch {
        /* clipboard blocked — nothing more we can do */
      }
      setNotice(message);
    };

    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, [message]);

  const guardProps = {
    onContextMenu: (event) => event.preventDefault(),
    onDragStart: (event) => event.preventDefault(),
    onCopy: (event) => event.preventDefault(),
  };

  return { notice, guardProps };
};

export default useContentProtection;
