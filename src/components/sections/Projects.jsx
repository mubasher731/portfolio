import { ExternalLink, Code2, ArrowUpRight, Globe } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { techIcons, techColors } from "../../data/iconRegistry";
import { projects } from "../../data/portfolio";

/** Small CSS phone mock-up that frames each project's tech icon. */
const PhoneMock = ({ icon }) => {
  const Icon = techIcons[icon] ?? Globe;
  const color = techColors[icon] ?? "#45DCFF";

  return (
    <div className="relative h-[6.5rem] w-16 rounded-[1.1rem] border border-white/15 bg-ink-950/85 p-1.5 shadow-2xl shadow-black/60">
      <span className="absolute left-1/2 top-1.5 h-0.5 w-5 -translate-x-1/2 rounded-full bg-white/25" />
      <div className="mt-3 grid h-[calc(100%-0.75rem)] w-full place-items-center rounded-xl bg-linear-to-br from-primary/20 to-accent/10">
        <Icon size={24} style={{ color }} />
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="relative py-20 md:py-28">
    <div className="container-x">
      <SectionHeading
        eyebrow="Projects"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={project.id} className="group flex flex-col overflow-hidden">
            {/* Preview header */}
            <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/5 bg-linear-to-br from-primary/18 via-accent/10 to-transparent">
              <div className="grid-bg absolute inset-0 opacity-60" />
              <span className="absolute right-5 top-2 font-display text-5xl font-black text-white/[0.06]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <PhoneMock icon={project.icon} />

              <span className="absolute left-5 top-5">
                <Badge tone="primary">{project.category}</Badge>
              </span>

              {project.featured ? (
                <span className="absolute bottom-4 right-5">
                  <Badge tone="accent">Featured</Badge>
                </span>
              ) : null}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-primary-light">
                {project.title}
              </h3>
              {project.subtitle ? (
                <p className="mt-1 text-[12.5px] font-medium uppercase tracking-wider text-slate-500">
                  {project.subtitle}
                </p>
              ) : null}

              <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-400 text-justify">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[12px] font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.live || project.source) && (
                <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-4">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary-light transition hover:text-white"
                    >
                      <ExternalLink size={14} />
                      Live demo
                    </a>
                  ) : null}
                  {project.source ? (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-400 transition hover:text-white"
                    >
                      <Code2 size={14} />
                      Source
                    </a>
                  ) : null}
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-white/20 transition group-hover:text-primary-light"
                  />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
