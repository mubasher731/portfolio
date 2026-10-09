import { Send, Sparkles, Star } from "lucide-react";
import Button from "../ui/Button";
import { scrollToSection } from "../../utils/scroll";
import { profile, assets } from "../../data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="relative py-14 md:py-20">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ---------------------------------------------------------------- */}
          {/* Profile summary                                                  */}
          {/* ---------------------------------------------------------------- */}
          <div className="text-center lg:text-left">
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
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Portrait                                                         */}
          {/* ---------------------------------------------------------------- */}
          <div className="relative mx-auto aspect-square w-full max-w-60 sm:max-w-72 lg:mx-0 lg:ml-auto lg:max-w-84">
            <div className="absolute -inset-6 rounded-full bg-linear-to-tr from-primary/25 via-accent/15 to-transparent blur-3xl" />
            <div className="relative h-full w-full rounded-full bg-linear-to-tr from-primary via-primary-light to-accent p-0.75 shadow-2xl shadow-primary/20">
              <img
                src={assets.profile}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
