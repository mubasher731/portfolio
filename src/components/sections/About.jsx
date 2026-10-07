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
          description="Beyond the code how I think, what I care about, and how I like to build mobile products."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Narrative + quick facts */}
          <div className="flex h-full flex-col justify-center">
            <div className="flex flex-col gap-6">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-justify text-[18px] leading-relaxed text-slate-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
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