import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { education } from "../../data/portfolio";

const Education = () => (
  <section id="education" className="relative py-20 md:py-28">
    <div className="container-x">
      <SectionHeading
        eyebrow="Education"
      />

      <div className="relative mt-14">
        <span className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-linear-to-b from-primary/60 via-white/10 to-transparent sm:block" />

        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.id} className="relative sm:pl-14">
              <span className="absolute left-0 top-6 hidden h-8 w-8 place-items-center rounded-full border border-primary/40 bg-ink-950 text-primary-light sm:grid">
                <GraduationCap size={15} />
              </span>

              <Card className="p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-primary-light">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-950/60 px-3 py-1">
                      <Calendar size={12} className="text-primary" />
                      {item.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} className="text-primary" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[13.5px] leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {item.highlights?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-300"
                      >
                        <CheckCircle2 size={12} className="text-primary/80" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
