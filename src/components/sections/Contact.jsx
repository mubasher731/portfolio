import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  User,
  MessageSquare,
  Loader2,
  AlertCircle,
} from "lucide-react";
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

/* -------------------------------------------------------------------------- */
/*  Web3Forms configuration                                                    */
/* -------------------------------------------------------------------------- */
/* Deliveries are routed by an access key, which is public by design: it can
   only send mail to the inbox it was created for, so shipping it to the
   browser is safe. It lives in the environment so it is not tied to a source
   file:

     .env.local       VITE_WEB3FORMS_ACCESS_KEY=...
     Vercel           Settings → Environment Variables, then redeploy

   Vite inlines VITE_* variables at build time, so a redeploy is required
   after changing it. See .env.example. */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";
const IS_CONFIGURED = ACCESS_KEY.trim().length > 0;

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

/* Validation lives here so the fields below stay readable. */
const rules = {
  name: {
    required: "Please enter your name",
    maxLength: { value: 80, message: "That name looks too long" },
  },
  email: {
    required: "Please enter your email",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      message: "Please enter a valid email address",
    },
  },
  message: {
    required: "Please write a short message",
    minLength: { value: 10, message: "Please add a little more detail" },
    maxLength: { value: 2000, message: "Please keep it under 2000 characters" },
  },
};

const FieldError = ({ id, children }) => (
  <p
    id={id}
    role="alert"
    className="mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-rose-300"
  >
    <AlertCircle size={13} className="shrink-0" />
    {children}
  </p>
);

const Contact = () => {
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", message: "", botcheck: false },
    mode: "onTouched",
  });

  const { submit } = useWeb3Forms({
    access_key: ACCESS_KEY,
    settings: {
      from_name: `${profile.name} — Portfolio`,
      subject: "New message from your portfolio",
    },
    onSuccess: (message) => {
      setState("success");
      setFeedback(message || "Thanks! Your message is on its way to my inbox.");
      reset();
    },
    onError: (message) => {
      setState("error");
      setFeedback(
        message || "Sorry, the message could not be sent right now.",
      );
    },
  });

  const onSubmit = async (values) => {
    setState("sending");
    setFeedback("");
    await submit(values);
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

  const fieldShell = (invalid) =>
    `group flex items-center gap-3 rounded-2xl border bg-white/3 px-4 transition ${
      invalid
        ? "border-rose-400/50 focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-400/20"
        : "border-white/10 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20"
    }`;

  const inputClass =
    "w-full bg-transparent py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none";

  const sending = state === "sending";

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
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-[13px] font-medium text-slate-300 transition hover:border-primary/60 hover:text-primary-light">
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
            <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
              Fill this in and it lands straight in my inbox — I usually reply
              within a day.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-6"
            >
              {/* Honeypot: invisible to people, filled by bots — Web3Forms
                  drops any submission where this is set. */}
              <input
                type="checkbox"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("botcheck")}
              />

              <label htmlFor="contact-name" className="sr-only">
                Your name
              </label>
              <div className={fieldShell(errors.name)}>
                <User size={16} className="shrink-0 text-slate-500" />
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={inputClass}
                  {...register("name", rules.name)}
                />
              </div>
              {errors.name ? (
                <FieldError id="contact-name-error">
                  {errors.name.message}
                </FieldError>
              ) : null}

              <label htmlFor="contact-email" className="sr-only">
                Your email
              </label>
              <div className={`${fieldShell(errors.email)} mt-4`}>
                <Mail size={16} className="shrink-0 text-slate-500" />
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={inputClass}
                  {...register("email", rules.email)}
                />
              </div>
              {errors.email ? (
                <FieldError id="contact-email-error">
                  {errors.email.message}
                </FieldError>
              ) : null}

              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>
              <div className={`${fieldShell(errors.message)} mt-4 items-start`}>
                <MessageSquare
                  size={16}
                  className="mt-4 shrink-0 text-slate-500"
                />
                <textarea
                  id="contact-message"
                  rows={6}
                  placeholder="Message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${inputClass} resize-none`}
                  {...register("message", rules.message)}
                />
              </div>
              {errors.message ? (
                <FieldError id="contact-message-error">
                  {errors.message.message}
                </FieldError>
              ) : null}

              {state === "success" ? (
                <p
                  role="status"
                  className="mt-5 flex items-start gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-[13px] font-medium text-emerald-300"
                >
                  <Check size={15} className="mt-0.5 shrink-0" />
                  {feedback}
                </p>
              ) : null}

              {state === "error" ? (
                <p
                  role="alert"
                  className="mt-5 flex items-start gap-2 rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-[13px] font-medium text-rose-300"
                >
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <span>
                    {feedback} You can always reach me directly at{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-semibold underline"
                    >
                      {profile.email}
                    </a>
                    .
                  </span>
                </p>
              ) : null}

              {!IS_CONFIGURED ? (
                <p className="mt-5 flex items-start gap-2 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-[12.5px] leading-relaxed text-amber-300">
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  <span>
                    The form is not wired up yet: set{" "}
                    <code className="font-semibold">
                      VITE_WEB3FORMS_ACCESS_KEY
                    </code>{" "}
                    in your environment (see{" "}
                    <code className="font-semibold">.env.example</code>), or
                    email me at{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-semibold underline"
                    >
                      {profile.email}
                    </a>
                    .
                  </span>
                </p>
              ) : null}

              <button
                type="submit"
                disabled={sending || !IS_CONFIGURED}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-primary-light px-6 py-3.5 text-sm font-bold text-on-primary shadow-lg shadow-primary/25 transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:brightness-100"
              >
                {sending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
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
