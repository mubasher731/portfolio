import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, User, MessageSquare } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { profile } from "../../data/portfolio";

/* ---------- Social config (icons + brand colors + real links) ---------- */
const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/", // ← replace with your GitHub
    color: "var(--color-white)",
    bg: "color-mix(in oklab, var(--color-white) 8%, transparent)",
    hover: "hover:bg-white hover:text-ink-950",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/", // ← replace with your LinkedIn
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.15)",
    hover: "hover:bg-[#0A66C2] hover:text-on-brand",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/1F15CUfbWY/",
    color: "#1877F2",
    bg: "rgba(24,119,242,0.15)",
    hover: "hover:bg-[#1877F2] hover:text-on-brand",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/_mubasher_ch_731?mdxt=cnJ6ejMza3VjNGxs",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.15)",
    hover:
      "hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] hover:text-on-brand",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
    color: "#25D366",
    bg: "rgba(37,211,102,0.15)",
    hover: "hover:bg-[#25D366] hover:text-on-brand",
  },
];

const emptyForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const details = [
    {
      icon: Mail,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      value: profile.location,
      href: "",
    },
  ];

  const inputWrapper =
    "group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20";

  const inputClass =
    "w-full bg-transparent py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none";

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact Me"
          title="Let's build something"
          highlight="together"
          description="Have an app idea, a role or just a question? My inbox is always open."
        />

        {/* Quick contact chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {details.map((detail) => {
            const Icon = detail.icon;
            const chip = (
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-slate-300 transition hover:border-primary/60 hover:text-primary-light">
                <Icon size={15} className="text-primary-light" />
                {detail.value}
              </span>
            );
            return detail.href ? (
              <a key={detail.value} href={detail.href}>
                {chip}
              </a>
            ) : (
              <span key={detail.value}>{chip}</span>
            );
          })}
        </div>

        {/* Form + Connect */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          {/* Send a Message */}
          <Card hover={false} gradient className="p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className={inputWrapper}>
                <User size={16} className="shrink-0 text-slate-500" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Name"
                  className={inputClass}
                />
              </div>

              <div className={`${inputWrapper} mt-4`}>
                <Mail size={16} className="shrink-0 text-slate-500" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Email"
                  className={inputClass}
                />
              </div>

              <div className={`${inputWrapper} mt-4 items-start`}>
                <MessageSquare
                  size={16}
                  className="mt-4 shrink-0 text-slate-500"
                />
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Message"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 active:scale-[0.99]"
              >
                {sent ? (
                  <>
                    <Check size={16} />
                    Opening your mail app
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Card>

          {/* Connect With Me */}
          <Card hover={false} className="h-fit p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-white">
              Connect With Me
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
              Feel free to reach out through any of these platforms
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    style={{ color: social.color, background: social.bg }}
                    className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/10 text-lg transition-all duration-200 ${social.hover}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;