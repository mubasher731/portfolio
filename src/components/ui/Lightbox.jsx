import { X } from "lucide-react";
import useEscapeKey from "../../hooks/useEscapeKey";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import Watermark from "./Watermark";

/**
 * Full-screen image viewer used for certificates and award photos.
 *
 * @param {boolean} open
 * @param {string} src
 * @param {string} alt
 * @param {string} [caption]
 * @param {Function} onClose
 * @param {boolean} [guarded]      - add the copy-deterrent layer (see useContentProtection)
 * @param {string}  [watermark]    - text tiled over the image while guarded
 * @param {object}  [guardProps]   - handlers from useContentProtection
 */
const Lightbox = ({
  open,
  src,
  alt = "",
  caption,
  onClose,
  guarded = false,
  watermark,
  guardProps = {},
}) => {
  useLockBodyScroll(open);
  useEscapeKey(onClose, open);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="print-hidden fixed inset-0 z-100 flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-md sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/6 text-white transition hover:border-primary/60 hover:text-primary-light"
      >
        <X size={20} />
      </button>

      <figure
        className="w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
        {...(guarded ? guardProps : {})}
      >
        <span
          className={`relative mx-auto block w-fit ${guarded ? "select-none" : ""}`}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className={`max-h-[78vh] w-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/70 ${
              guarded ? "pointer-events-none select-none" : ""
            }`}
          />
          {guarded && watermark ? (
            <Watermark text={watermark} className="rounded-2xl text-white/40" />
          ) : null}
        </span>
        {caption ? (
          <figcaption className="mt-5 text-center text-sm font-medium text-slate-400">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
};

export default Lightbox;
