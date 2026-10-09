import { useEffect, useRef, useState } from "react";
import { Check, Moon, Palette, Sun } from "lucide-react";
import useEscapeKey from "../../hooks/useEscapeKey";
import { useTheme } from "../../theme/ThemeContext";
import { accentPalettes } from "../../theme/palettes";

const modes = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
];

/**
 * Header control for the appearance: light/dark mode plus the accent palette.
 *
 * @param {string} [className] - extra classes for the positioning wrapper
 */
const ThemeSwitcher = ({ className = "" }) => {
  const { mode, accent, setMode, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapper = useRef(null);

  useEscapeKey(() => setOpen(false), open);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!wrapper.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div ref={wrapper} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Change theme and accent colour"
        className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-primary/50 hover:text-primary-light"
      >
        <Palette size={18} />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Appearance settings"
          className="fixed left-4 right-4 top-[5rem] z-50 rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:absolute sm:left-auto sm:right-0 sm:top-[calc(100%+0.6rem)] sm:w-[17rem]"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Appearance
          </p>

          <div className="mt-2.5 grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
            {modes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                aria-pressed={mode === id}
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[13px] font-semibold transition ${
                  mode === id
                    ? "bg-primary/15 text-primary-light ring-1 ring-inset ring-primary/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Accent colour
          </p>

          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {accentPalettes.map((palette) => {
              const selected = palette.id === accent;
              return (
                <button
                  key={palette.id}
                  type="button"
                  onClick={() => setAccent(palette.id)}
                  aria-label={`${palette.label} accent`}
                  aria-pressed={selected}
                  title={palette.label}
                  className={`relative grid h-9 w-9 place-items-center rounded-full transition ${
                    selected
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-ink-900"
                      : "hover:scale-110"
                  }`}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${palette.swatch[0]}, ${palette.swatch[1]})`,
                    }}
                  />
                  {selected ? (
                    <Check
                      size={15}
                      className="absolute text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ThemeSwitcher;
