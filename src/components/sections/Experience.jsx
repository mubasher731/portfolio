import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { experience } from "../../data/portfolio";

const Experience = () => (
  <section id="experience" className="relative py-20 md:py-28">
    <div className="container-x">
      <SectionHeading
        eyebrow="Work Experience"
      />

      <div className="relative mt-14">
        <span className="absolute left-3.75 top-2 hidden h-[calc(100%-1rem)] w-px bg-linear-to-b from-primary/60 via-white/10 to-transparent sm:block" />

        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.id} className="relative sm:pl-14">
              <span className="absolute left-0 top-6 hidden h-8 w-8 place-items-center rounded-full border border-primary/40 bg-ink-950 text-primary-light sm:grid">
                <Briefcase size={14} />
              </span>

              <Card className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-[15px] font-semibold text-primary-light">
                      {job.company}
                      <span className="ml-2 rounded-full border border-white/10 px-2 py-0.5 text-[12px] font-medium text-slate-400">
                        {job.type}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-primary" />
                      {job.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-primary" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[15px] leading-7 text-slate-400"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary/80"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
