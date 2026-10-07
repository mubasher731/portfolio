import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { profile, socials } from "../../data/portfolio";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: Mail,
  whatsapp: FaWhatsapp,
};

const emptyForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name}`
    );
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
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { icon: MapPin, label: "Location", value: profile.location, href: "" },
  ];

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact Me"
          // title="Let's build something"
          // highlight="together"
          // description="Have an app idea, a role or just a question? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Details */}
          <div>
            <div className="space-y-4">
              {details.map((detail) => {
                const Icon = detail.icon;
                const body = (
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-primary/20 to-accent/10 text-primary-light">
                      <Icon size={19} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {detail.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-white">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );

                return detail.href ? (
                  <a key={detail.label} href={detail.href} className="block">
                    <Card className="p-4">{body}</Card>
                  </a>
                ) : (
                  <Card key={detail.label} hover={false} className="p-4">
                    {body}
                  </Card>
                );
              })}
            </div>

            <Card hover={false} className="mt-6 p-6">
              <p className="text-sm font-semibold text-white">Find me online</p>
              <p className="mt-1 text-[13px] text-slate-400">
                I usually reply within a day.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon] ?? Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.icon === "mail" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-semibold text-slate-300 transition-colors hover:border-primary/60 hover:text-primary-light"
                    >
                      <Icon size={14} />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </Card>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
              <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
              <p className="text-[13px] font-medium text-emerald-200">
                {profile.availability} — let&apos;s talk.
              </p>
            </div>
          </div>

          {/* Form */}
          <Card hover={false} gradient className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="App development enquiry"
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a little about what you have in mind..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <Button
                type="submit"
                icon={sent ? Check : Send}
                arrow={false}
                className="mt-7 w-full sm:w-auto"
              >
                {sent ? "Opening your mail app" : "Send message"}
              </Button>

              <p className="mt-4 text-[12px] text-slate-500">
                This opens your email client with the message pre-filled, so
                nothing gets lost in transit.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
