import { useState } from "react";
import { Award, Trophy, Eye, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Lightbox from "../ui/Lightbox";
import { achievements } from "../../data/portfolio";

const iconMap = {
  award: Award,
  trophy: Trophy,
};

const accentMap = {
  primary: {
    badge: "primary",
    icon: "bg-primary/15 text-primary-light",
  },
  amber: {
    badge: "amber",
    icon: "bg-amber-400/15 text-amber-300",
  },
};

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones &"
          highlight="recognition"
          description="Research published, competitions won, and the proof behind them."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            const accent = accentMap[item.accent] ?? accentMap.primary;

            return (
              <Card key={item.id} className="group flex flex-col overflow-hidden">
                {/* Image */}
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="relative h-60 overflow-hidden border-b border-white/10 bg-ink-900/60"
                  aria-label={`Enlarge: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={`h-full w-full ${
                      item.imageFit === "contain"
                        ? "object-contain p-4"
                        : "object-cover object-center"
                    }`}
                  />
                  <span className="absolute left-4 top-4">
                    <Badge tone={accent.badge}>{item.tag}</Badge>
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-950/75 px-3 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur">
                    {item.year}
                  </span>
                  <span className="absolute inset-0 grid place-items-center bg-ink-950/50 opacity-0 backdrop-blur-[2px] transition group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink-950/80 px-4 py-2 text-[13px] font-semibold text-white">
                      <Eye size={15} />
                      View
                    </span>
                  </span>
                </button>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start gap-3">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${accent.icon}`}
                    >
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-[16px] font-bold leading-snug text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[12px] font-semibold text-slate-200 transition-colors hover:border-primary/60 hover:text-primary-light"
                  >
                    <Eye size={13} />
                    See proof
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <Lightbox
        open={Boolean(selected)}
        src={selected?.image}
        alt={selected?.imageAlt ?? ""}
        caption={selected ? `${selected.title} · ${selected.year}` : ""}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default Achievements;
