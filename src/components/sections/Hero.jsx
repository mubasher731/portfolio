import { Mail, Send, Sparkles, Star } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { scrollToSection } from "../../utils/scroll";
import { profile, assets } from "../../data/portfolio";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: Mail,
};

const Hero = () => {
  return (
    <section id="home" className="relative py-14 md:py-20">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ---------------------------------------------------------------- */}
          {/* Profile summary                                                  */}
          {/* ---------------------------------------------------------------- */}
          <div className="text-center lg:text-left">
            {/* Availability */}
            {/* <Badge tone="emerald" className="gap-2 px-3.5 py-1.5 text-[11.5px]">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {profile.availability}
            </Badge> */}

            <p className="mt-7 flex items-center justify-center gap-2 text-sm font-medium text-slate-400 lg:justify-start">
              <Sparkles size={14} className="text-primary" />
              Hello, I&apos;m
            </p>

            <h1 className="mt-3 font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl">
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="mt-4 font-display text-lg font-bold text-primary-light sm:text-xl md:text-2xl">
              {profile.tagline}
            </p>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-400">
              {profile.heroText}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                icon={Send}
                arrow={false}
              >
                Get in touch
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                icon={Star}
                arrow={false}
              >
                View projects
              </Button>
            </div>

            {/* <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon] ?? Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={social.name}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-primary/60 hover:text-primary-light"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Portrait                                                         */}
          {/* ---------------------------------------------------------------- */}
          <div className="relative mx-auto aspect-square w-full max-w-[15rem] sm:max-w-[18rem] lg:mx-0 lg:ml-auto lg:max-w-[21rem]">
            <div className="absolute -inset-6 rounded-full bg-linear-to-tr from-primary/25 via-accent/15 to-transparent blur-3xl" />
            <div className="relative h-full w-full rounded-full bg-linear-to-tr from-primary via-primary-light to-accent p-[3px] shadow-2xl shadow-primary/20">
              <img
                src={assets.profile}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Stats                                                              */}
        {/* ------------------------------------------------------------------ */}
        {/* <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mt-20 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-ink-950/70 px-4 py-6 text-center transition-colors hover:bg-ink-900/70"
            >
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </p>
              <p className="mt-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-slate-500 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
