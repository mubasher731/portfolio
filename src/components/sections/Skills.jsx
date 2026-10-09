import { Server, Brain, Wrench, Globe } from "lucide-react";
import { FaMobileAlt } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import { techIcons, techColors } from "../../data/iconRegistry";
import { skillGroups } from "../../data/portfolio";

const groupIcons = {
  smartphone: FaMobileAlt,
  server: Server,
  brain: Brain,
  wrench: Wrench,
};

const Skills = () => (
  <section id="skills" className="relative py-20 md:py-28">
    <div className="container-x">
      <SectionHeading
        eyebrow="Skills"
      />

      {/* Group cards flow into two balanced columns — uneven skill counts
          never leave an empty gap inside a card. */}
      <div className="mt-14 gap-5 md:columns-2 xl:gap-6">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.icon] ?? FaMobileAlt;
          return (
            <div
              key={group.id}
              className="mb-5 flex break-inside-avoid flex-col rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors hover:border-primary/25 xl:mb-6"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-ink-900 text-primary-light">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-400">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid auto-rows-fr grid-cols-2 content-start gap-3 sm:grid-cols-3">
                {group.skills.map((skill) => {
                  const SkillIcon = techIcons[skill.icon] ?? Globe;
                  const color = techColors[skill.icon] ?? "#45DCFF";
                  return (
                    <div
                      key={skill.name}
                      className="flex h-full flex-col items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-ink-950/60 px-2 py-4 text-center transition-colors hover:border-primary/40 hover:bg-white/5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/4">
                        <SkillIcon size={20} style={{ color }} />
                      </span>
                      <span className="text-[12.5px] font-semibold leading-snug text-slate-100">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
