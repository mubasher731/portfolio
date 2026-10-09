/**
 * Consistent section header: an optional eyebrow, a large left-aligned title
 * and a blurb. Text only — no panel or background.
 *
 * `eyebrow` doubles as the heading when `title` is omitted, so simple sections
 * can use `<SectionHeading eyebrow="Skills" />` and still get a full-size title.
 *
 * @param {"left"|"center"} [align]
 * @param {string} [eyebrow]    - small label; the heading when `title` is absent
 * @param {string} [title]      - plain part of the heading
 * @param {string} [highlight]  - gradient part of the heading
 * @param {string} [description]
 */
const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}) => {
  const isLeft = align === "left";
  const heading = title ?? eyebrow;
  const showEyebrow = Boolean(title && eyebrow);

  return (
    <div
      className={`flex flex-col ${
        isLeft ? "items-start text-left" : "items-center text-center"
      } ${className}`}
    >
      {showEyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-light">
          {eyebrow}
        </span>
      ) : null}

      {heading ? (
        <h2
          className={`font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-[2.5rem] ${
            showEyebrow ? "mt-3" : ""
          }`}
        >
          {heading}
          {highlight ? (
            <>
              {" "}
              <span className="gradient-text">{highlight}</span>
            </>
          ) : null}
        </h2>
      ) : null}

      {description ? (
        <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
