/**
 * Consistent section header: small eyebrow pill, big title, optional blurb.
 *
 * @param {"center"|"left"} [align]
 * @param {string} [eyebrow]
 * @param {string} [title]      - plain part of the heading
 * @param {string} [highlight]  - gradient part of the heading
 * @param {string} [description]
 */
const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) => {
  const isLeft = align === "left";

  return (
    <div
      className={`flex max-w-2xl flex-col ${
        isLeft ? "items-start text-left" : "mx-auto items-center text-center"
      } ${className}`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-light">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
          {eyebrow}
        </span>
      ) : null}

      <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[2.6rem]">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="gradient-text">{highlight}</span>
          </>
        ) : null}
      </h2>

      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
