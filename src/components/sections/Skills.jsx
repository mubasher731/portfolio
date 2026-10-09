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
      
      <div className="mt-14 gap-5 md:columns-2 xl:gap-6">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.icon] ?? FaMobileAlt;
          return (
            <div
              key={group.id}
              className="mb-5 flex break-inside-avoid flex-col rounded-2xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-primary/25 sm:p-5 xl:mb-6"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-ink-900 text-primary-light">
                  <Icon size={16} />
                </span>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-slate-400">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid auto-rows-fr grid-cols-2 content-start gap-1.5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.skills.map((skill) => {
                  const SkillIcon = techIcons[skill.icon] ?? Globe;
                  const color = techColors[skill.icon] ?? "#45DCFF";
                  return (
                    <div
                      key={skill.name}
                      className="flex h-full flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-ink-950/60 px-1.5 py-2.5 text-center transition-colors hover:border-primary/40 hover:bg-white/5"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-white/10 bg-white/4">
                        <SkillIcon size={15} style={{ color }} />
                      </span>
                      <span className="text-[11px] font-semibold leading-snug text-slate-100">
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
