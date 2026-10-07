import { useState, Fragment } from "react";
import {
  BookOpen,
  Award,
  Eye,
  Quote,
  Copy,
  Check,
  ExternalLink,
  Star,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Lightbox from "../ui/Lightbox";
import { publications } from "../../data/portfolio";

const Publications = () => {
  const [preview, setPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const paper = publications[0];

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(paper.citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const metadata = [
    { label: "Published", value: `March ${paper.year}` },
    { label: "Journal", value: `${paper.journal}, Vol. 14, Issue 3` },
    { label: "Article", value: "148" },
    { label: "DOI", value: paper.doi },
  ];

  const metrics = [
    { label: "Impact Factor", value: paper.impactFactor },
    { label: "CiteScore", value: paper.citeScore },
    { label: "Volume / Issue", value: "14 / 3" },
    { label: "Published", value: paper.year },
  ];

  return (
    <section id="publications" className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Research Paper Publication"
          // title="Peer-reviewed"
          // highlight="publication"
          // description="A journal article I co-authored on interpretable machine learning for cardiac signal analysis."
        />

        <Card gradient hover={false} className="mt-14 overflow-hidden">
          {/* Gradient masthead */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-linear-to-r from-primary/25 via-primary/10 to-accent/15 px-6 py-5 md:px-8">
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-ink-950/60 text-primary-light backdrop-blur">
                <BookOpen size={20} />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">
                  {paper.publisher} — {paper.journal}
                </p>
                <p className="text-[12px] text-slate-300/80">
                  Peer-Reviewed Journal · Open Access
                </p>
              </div>
            </div>
            <Badge tone="emerald">Open Access</Badge>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Certificate preview */}
            <button
              type="button"
              onClick={() => setPreview(true)}
              className="group relative flex items-center justify-center border-b border-white/10 bg-ink-900/50 p-7 lg:border-b-0 lg:border-r"
              aria-label="Open the certificate of publication"
            >
              <img
                src={paper.certificate}
                alt="MDPI certificate of publication"
                className="w-full rounded-xl border border-white/10 shadow-2xl shadow-black/50"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink-950/55 opacity-0 backdrop-blur-[2px] transition group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink-950/80 px-4 py-2 text-sm font-semibold text-white">
                  <Eye size={16} />
                  View certificate
                </span>
              </span>
            </button>

            {/* Details */}
            <div className="p-7 md:p-9">
              <h3 className="font-display text-xl font-bold leading-snug text-white md:text-2xl">
                {paper.title}
              </h3>

              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-400">
                <Star size={13} className="text-primary" />
                {paper.volume} · {paper.year}
              </p>

              {/* Metadata pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {metadata.map((item) => (
                  <span
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] font-semibold text-slate-200">
                      {item.value}
                    </span>
                  </span>
                ))}
              </div>

              {/* Authors */}
              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Authors
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                  {paper.authors.map((author, index) => {
                    const isMe = author === paper.highlightAuthor;
                    return (
                      <Fragment key={author}>
                        <span
                          className={
                            isMe
                              ? "font-bold text-primary-light underline decoration-primary/40 decoration-2 underline-offset-4"
                              : ""
                          }
                        >
                          {author}
                        </span>
                        {index < paper.authors.length - 1 ? ", " : ""}
                      </Fragment>
                    );
                  })}
                </p>
              </div>

              {/* Abstract */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <Quote size={16} className="text-primary/70" />
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                  {paper.abstract}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={copyCitation}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary-light"
                >
                  {copied ? (
                    <Check size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                  {copied ? "Citation copied" : "Copy citation"}
                </button>
                {paper.url ? (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-primary-light px-5 py-2.5 text-[13px] font-bold text-ink-950 transition hover:-translate-y-0.5"
                  >
                    Read article
                    <ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/5 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-ink-950/70 px-5 py-5">
                <p className="flex items-center gap-1.5 font-display text-2xl font-extrabold text-white">
                  <Award size={16} className="text-primary" />
                  {metric.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Lightbox
        open={preview}
        src={paper.certificate}
        alt={`Certificate of publication for ${paper.title}`}
        caption={`Certificate of publication — ${paper.journal} (${paper.publisher}), ${paper.year}`}
        onClose={() => setPreview(false)}
      />
    </section>
  );
};

export default Publications;
