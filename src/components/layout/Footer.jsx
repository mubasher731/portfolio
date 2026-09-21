import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { scrollToSection } from "../../utils/scroll";
import { profile, navLinks, socials } from "../../data/portfolio";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: Mail,
  whatsapp: FaWhatsapp,
};

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-ink-900/40">
    <div className="container-x py-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-primary to-accent text-[13px] font-black text-white">
              {profile.initials}
            </span>
            <span className="font-display text-lg font-extrabold text-white">
              {profile.firstName}
              <span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-slate-400">
            {profile.role} based in {profile.location}, building performant
            Android and iOS applications with Flutter and React Native.
          </p>
          <div className="mt-5 flex gap-3">
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
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Navigate
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1">
            {navLinks.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.href.replace("#", ""))}
                  className="text-[13.5px] text-slate-400 transition hover:text-primary-light"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-[13.5px] text-slate-400 transition hover:text-primary-light"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="text-[13.5px] text-slate-400 transition hover:text-primary-light"
              >
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="text-[13.5px] text-slate-400 transition hover:text-primary-light"
              >
                Download resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
        <p className="text-center text-[12.5px] text-slate-500 sm:text-left">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind
          CSS and Vite.
        </p>
        <p className="inline-flex items-center gap-2 text-[12.5px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {profile.availability}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
