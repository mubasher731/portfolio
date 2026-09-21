const tones = {
  primary: "border-primary/30 bg-primary/12 text-primary-light",
  accent: "border-accent/30 bg-accent/12 text-accent",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  neutral: "border-white/12 bg-white/[0.05] text-slate-300",
};

/**
 * Small pill used for tags, statuses and metadata.
 *
 * @param {keyof typeof tones} [tone]
 * @param {React.ElementType} [icon]
 */
const Badge = ({ tone = "neutral", icon: Icon, className = "", children }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold leading-none ${tones[tone] ?? tones.neutral} ${className}`}
  >
    {Icon ? <Icon size={12} /> : null}
    {children}
  </span>
);

export default Badge;
