import { useId } from "react";

/**
 * Tiled diagonal watermark laid over protected media.
 *
 * Purely a deterrent: it does not stop a copy being taken, it makes sure the
 * copy carries the owner's name. Colour comes from `currentColor`, so the
 * caller decides how loud it is and it follows the active theme.
 *
 * @param {string} text - repeated across the surface
 * @param {string} [className] - extra classes, e.g. for colour, radius, opacity
 */
const Watermark = ({ text, className = "" }) => {
  const patternId = `wm-${useId().replace(/:/g, "")}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-hidden ${className}`}
    >
      <defs>
        <pattern
          id={patternId}
          width="230"
          height="140"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-28)"
        >
          <text
            x="6"
            y="76"
            fill="currentColor"
            fontSize="13"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            {text}
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export default Watermark;
