import { ArrowUpRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-linear-to-r from-primary to-primary-light text-on-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40",
  outline:
    "border border-white/15 bg-white/3 text-white backdrop-blur hover:border-primary/60 hover:text-primary-light",
  soft: "border border-primary/25 bg-primary/12 text-primary-light hover:bg-primary/20",
  ghost: "text-slate-300 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-[12.5px]",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

/**
 * The single button used across the whole site.
 *
 * Renders an <a> when `href` is supplied, otherwise a <button>.
 *
 * @param {string} [href]        - turns the button into a link
 * @param {"primary"|"outline"|"soft"|"ghost"} [variant]
 * @param {"sm"|"md"|"lg"} [size]
 * @param {React.ElementType} [icon] - icon rendered before the label
 * @param {boolean} [arrow]      - show the trailing arrow (default true for
 *                                 primary and outline variants)
 */
const Button = ({
  href,
  variant = "primary",
  size = "lg",
  icon: Icon,
  arrow,
  className = "",
  children,
  ...rest
}) => {
  const showArrow = arrow ?? (variant === "primary" || variant === "outline");
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon ? <Icon size={16} /> : null}
      {children}
      {showArrow ? <ArrowUpRight size={16} /> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
