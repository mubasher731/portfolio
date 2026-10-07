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
        // title="My mobile"
        // highlight="toolkit"
        // description="The languages, frameworks and platforms I use to design, build and ship applications."
      />

      {/* One simple block per group. Every technology sits in an equal-size
          tile so the grid stays aligned no matter how long the name is. */}
      <div className="mt-14 space-y-6">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.icon] ?? FaMobileAlt;
          return (
            <div
              key={group.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
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

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {group.skills.map((skill) => {
                  const SkillIcon = techIcons[skill.icon] ?? Globe;
                  const color = techColors[skill.icon] ?? "#45DCFF";
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-950/60 px-3.5 py-3"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                        <SkillIcon size={18} style={{ color }} />
                      </span>
                      <span className="truncate text-[13px] font-semibold text-white">
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
