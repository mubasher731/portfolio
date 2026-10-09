import { useState } from "react";
import { Menu, X, Download, Mail } from "lucide-react";
import Button from "../ui/Button";
import useActiveSection from "../../hooks/useActiveSection";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useEscapeKey from "../../hooks/useEscapeKey";
import { scrollToSection } from "../../utils/scroll";
import { navLinks, primaryNav, sectionIds, profile, assets } from "../../data/portfolio";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useLockBodyScroll(open);
  useEscapeKey(() => setOpen(false), open);

  const isActive = (href) => active === href.replace("#", "");

  const go = (href) => {
    setOpen(false);
    scrollToSection(href.replace("#", ""));
  };

  return (
    <>
      {/* Sticky header.
          It stays pinned to the top of the viewport while the page scrolls,
          so navigation is always reachable. */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-ink-950/85 shadow-[0_18px_50px_-30px_rgba(6,162,194,0.9)] backdrop-blur-xl">
        {/* Accent hairline along the bottom edge of the bar */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
        />
        <nav className="relative container-x flex h-[4.5rem] items-center gap-3 sm:h-20">
          {/* ---------------------------------------------------------------- */}
          {/* Brand                                                            */}
          {/* ---------------------------------------------------------------- */}
          <button
            type="button"
            onClick={() => go("#home")}
            className="flex shrink-0 items-center gap-3 rounded-xl py-1 pr-2 transition hover:opacity-90"
            aria-label="Back to top"
          >
            <span className="relative grid h-10 w-10 shrink-0 place-items-center sm:h-11 sm:w-11">
              <span className="absolute inset-0 rounded-full bg-linear-to-tr from-primary to-accent p-[2px]">
                <span className="block h-full w-full rounded-full bg-ink-900" />
              </span>
              <img
                src={assets.profile}
                alt=""
                className="relative h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
              />
            </span>
            <span className="hidden font-display text-xl font-extrabold tracking-tight text-white sm:block">
              {profile.firstName}
              <span className="text-primary">.</span>
            </span>
          </button>

          {/* ---------------------------------------------------------------- */}
          {/* Desktop nav buttons                                              */}
          {/* ---------------------------------------------------------------- */}
          <ul className="mx-auto hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => {
              const activeItem = isActive(item.href);
              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => go(item.href)}
                    aria-current={activeItem ? "page" : undefined}
                    className={`rounded-full px-4 py-2.5 font-display text-[15px] font-semibold tracking-tight transition-all duration-200 ${
                      activeItem
                        ? "bg-primary/15 text-primary-light ring-1 ring-inset ring-primary/30"
                        : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ---------------------------------------------------------------- */}
          {/* Actions                                                          */}
          {/* ---------------------------------------------------------------- */}
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button
              href={profile.resumeUrl}
              download
              variant="outline"
              size="md"
              icon={Download}
              arrow={false}
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>

            <Button
              onClick={() => go("#contact")}
              size="md"
              arrow={false}
              className="hidden sm:inline-flex"
            >
              Hire Me
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-primary/50 hover:text-primary-light lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Mobile overlay + drawer                                            */}
      {/* ------------------------------------------------------------------ */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-ink-950/75 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[70] flex h-full w-[84%] max-w-sm flex-col border-l border-white/10 bg-ink-900/95 p-6 backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={assets.profile}
              alt=""
              className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/40"
            />
            <div>
              <p className="font-display text-base font-bold text-white">
                {profile.name}
              </p>
              <p className="text-xs font-medium text-primary-light">{profile.role}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="text-slate-300 transition hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((item) => (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => go(item.href)}
                className={`w-full rounded-xl px-4 py-3.5 text-left font-display text-base font-semibold transition ${
                  isActive(item.href)
                    ? "bg-primary/15 text-primary-light"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 pt-6">
          <Button
            onClick={() => go("#contact")}
            className="w-full"
            size="md"
            icon={Mail}
            arrow={false}
          >
            Get in touch
          </Button>
          <Button
            href={profile.resumeUrl}
            download
            variant="outline"
            size="md"
            icon={Download}
            arrow={false}
            className="w-full"
          >
            Download Resume
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
