import {
  Mail,
  MapPin,
  GraduationCap,
  CheckCircle2,
  Target,
  Users,
} from "lucide-react";
import { FaMobileAlt, FaLayerGroup, FaCloud, FaPaintBrush } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Download } from "lucide-react";
import { profile, services } from "../../data/portfolio";

const serviceIcons = {
  smartphone: FaMobileAlt,
  layers: FaLayerGroup,
  plug: FaCloud,
  palette: FaPaintBrush,
};

const About = () => {
  const facts = [
    { icon: Users, label: "Name", value: profile.name },
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: GraduationCap, label: "Degree", value: "BS Computer Science" },
    { icon: Target, label: "Focus", value: profile.role },
    { icon: CheckCircle2, label: "Status", value: profile.availability },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who sweats"
          highlight="the details"
          description="Beyond the code — how I think, what I care about, and how I like to build mobile products."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Narrative + quick facts */}
          <div>
            <div className="space-y-4">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-[15px] leading-relaxed text-slate-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
              {facts.map((fact) => {
                const Icon = fact.icon;
                const body = (
                  <>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary-light">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        {fact.label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-white">
                        {fact.value}
                      </span>
                    </span>
                  </>
                );

                return fact.href ? (
                  <a
                    key={fact.label}
                    href={fact.href}
                    className="flex items-center gap-3 bg-ink-950/70 px-4 py-4 transition-colors hover:bg-ink-900/70"
                  >
                    {body}
                  </a>
                ) : (
                  <div
                    key={fact.label}
                    className="flex items-center gap-3 bg-ink-950/70 px-4 py-4"
                  >
                    {body}
                  </div>
                );
              })}
            </div>

            <Button
              href={profile.resumeUrl}
              download
              variant="outline"
              size="md"
              icon={Download}
              className="mt-8"
            >
              View full resume
            </Button>
          </div>

          {/* What I do */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              What I do
            </p>
            <div className="space-y-4">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon] ?? FaMobileAlt;
                return (
                  <Card key={service.title} gradient className="group p-5">
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-primary/20 to-accent/10 text-primary-light transition group-hover:from-primary/30">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h3 className="font-display text-[15px] font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
