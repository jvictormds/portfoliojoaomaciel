import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Play,
  ShieldCheck,
  Stethoscope,
  SlidersHorizontal,
  LifeBuoy,
  Brain,
  Workflow,
  Database,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/cases/Reveal";
import { ondeIrCase as c, PRODUCT_URL, YOUTUBE_URL } from "@/data/ondeIrCase";

const safetyIcons = [Stethoscope, ShieldCheck, SlidersHorizontal, LifeBuoy];
const stackIcons = [Brain, Workflow, Database, Lock];

const Eyebrow = ({ children, tone = "default" }: { children: string; tone?: "default" | "dark" }) => (
  <p
    className={`text-xs md:text-sm font-semibold uppercase tracking-[0.18em] mb-4 ${
      tone === "dark" ? "text-ondeir" : "text-ondeir"
    }`}
  >
    {children}
  </p>
);

const Divider = ({ label }: { label: string }) => (
  <div className="bg-ondeir text-ondeir-foreground">
    <div className="container mx-auto px-4 py-5">
      <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em]">{label}</p>
    </div>
  </div>
);

const youtubeId = (url: string) => {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{6,})/);
  return match?.[1] ?? "";
};

const OndeIr = () => {
  const [videoOn, setVideoOn] = useState(false);
  const videoId = YOUTUBE_URL ? youtubeId(YOUTUBE_URL) : "";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = c.meta.title;

    const setMeta = (selector: string, attr: string, key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      const previous = tag.getAttribute("content");
      tag.setAttribute("content", content);
      return () => {
        if (previous !== null) tag!.setAttribute("content", previous);
      };
    };

    const restores = [
      setMeta('meta[name="description"]', "name", "description", c.meta.description),
      setMeta('meta[property="og:title"]', "property", "og:title", c.meta.title),
      setMeta('meta[property="og:description"]', "property", "og:description", c.meta.description),
      setMeta('meta[property="og:type"]', "property", "og:type", "article"),
    ];

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/cases/onde-ir`;

    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      restores.forEach((restore) => restore());
      if (previousCanonical && canonical) canonical.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Barra de âncoras */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto px-4 h-14 flex items-center gap-4 overflow-x-auto">
          <Link
            to="/#cases"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4" />
            Cases
          </Link>
          <span className="h-5 w-px bg-border" aria-hidden="true" />
          <ul className="flex items-center gap-4">
            {c.anchors.map((anchor) => (
              <li key={anchor.id}>
                <a
                  href={`#${anchor.id}`}
                  className="text-sm text-muted-foreground hover:text-ondeir transition-colors whitespace-nowrap"
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {/* BLOCO 0 — Hero */}
        <header className="pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <h1 className="max-w-4xl text-3xl md:text-5xl font-bold leading-tight">
                {c.hero.title}
              </h1>
              <p className="mt-6 max-w-[720px] text-lg text-muted-foreground">{c.hero.subtitle}</p>
            </Reveal>

            <Reveal delay={120}>
              <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 border-y border-border py-8">
                {c.hero.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="text-3xl md:text-4xl font-bold text-ondeir">{metric.value}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{metric.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-ondeir text-ondeir-foreground hover:bg-ondeir/90">
                  <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                    Ver o produto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                {videoId && (
                  <Button asChild variant="outline" size="lg">
                    <a href="#aws-summit">
                      <Play className="w-4 h-4" />
                      Assistir no AWS Summit
                    </a>
                  </Button>
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {c.hero.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs bg-muted/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </header>

        {/* BLOCO 1 — O desafio */}
        <section id="desafio" className="bg-ondeir-deep text-ondeir-deep-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow tone="dark">{c.challenge.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.challenge.title}</h2>
              <p className="mt-4 max-w-[720px] text-ondeir-deep-foreground/70">
                {c.challenge.support}
              </p>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-2 gap-12">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.18em] text-ondeir-deep-foreground/60">
                  {c.challenge.metricsLabel}
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-8">
                  {c.challenge.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-2xl md:text-3xl font-bold">{metric.value}</dt>
                      <dd className="mt-1 text-sm text-ondeir-deep-foreground/70">{metric.label}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={120}>
                <ul className="space-y-4">
                  {c.challenge.points.map((point) => (
                    <li key={point} className="flex gap-3 text-ondeir-deep-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ondeir" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <Divider label={c.act1Divider} />

        {/* BLOCO 2 — A solução */}
        <section id="unimed" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.solution.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.solution.title}</h2>
              <p className="mt-4 max-w-[720px] text-muted-foreground">{c.solution.support}</p>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {c.solution.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 100}>
                  <Card className="h-full p-6 border-t-4 border-t-ondeir">
                    <span className="text-sm font-bold text-ondeir">0{i + 1}</span>
                    <h3 className="mt-3 text-lg md:text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mt-10 rounded-lg bg-ondeir-soft px-6 py-5 text-base md:text-lg font-semibold text-ondeir">
                {c.solution.highlight}
              </p>
            </Reveal>
          </div>
        </section>

        {/* BLOCO 3 — O produto na prática */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.product.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.product.title}</h2>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-4 md:overflow-visible">
                {c.product.screens.map((screen, i) => (
                  <li
                    key={screen.caption}
                    className={`snap-center flex-shrink-0 w-[70%] sm:w-[45%] md:w-auto ${
                      i % 2 === 1 ? "md:mt-10" : ""
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-medium">
                      <img
                        src={screen.src}
                        alt={`Tela do Onde Ir: ${screen.caption}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {i + 1}. {screen.caption}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* BLOCO 4 — Segurança clínica */}
        <section className="bg-ondeir-deep text-ondeir-deep-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow tone="dark">{c.safety.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.safety.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.safety.cards.map((card, i) => {
                const Icon = safetyIcons[i];
                return (
                  <Reveal key={card.title} delay={i * 90}>
                    <div className="h-full rounded-lg border border-ondeir-deep-foreground/15 bg-ondeir-deep-foreground/5 p-6">
                      <Icon className="w-6 h-6 text-ondeir" aria-hidden="true" />
                      <h3 className="mt-4 text-base md:text-lg font-semibold">{card.title}</h3>
                      <p className="mt-2 text-sm text-ondeir-deep-foreground/70 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={120}>
              <p className="mt-10 max-w-[720px] italic text-ondeir-deep-foreground/80">
                {c.safety.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* BLOCO 5 — Ciclo de vida */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.lifecycle.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.lifecycle.title}</h2>
            </Reveal>

            <ol className="mt-12 space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-10">
              {c.lifecycle.milestones.map((milestone, i) => (
                <Reveal as="li" key={milestone.date} delay={i * 60} className="relative">
                  <div className="flex md:block gap-4">
                    <div className="flex flex-col items-center md:flex-row md:w-full">
                      <span
                        className={`h-3 w-3 flex-shrink-0 rounded-full ${
                          "highlight" in milestone && milestone.highlight
                            ? "bg-ondeir ring-4 ring-ondeir/25"
                            : "bg-border"
                        }`}
                      />
                      <span className="w-px flex-1 bg-border md:h-px md:w-full" />
                    </div>
                    <div className="pb-2 md:pt-4">
                      <p
                        className={`text-sm font-bold ${
                          "highlight" in milestone && milestone.highlight
                            ? "text-ondeir"
                            : "text-foreground"
                        }`}
                      >
                        {milestone.date}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{milestone.label}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* BLOCO 6 — Bastidores e lançamento */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <Reveal>
              <Eyebrow>{c.backstage.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-bold">{c.backstage.title}</h2>
              <ul className="mt-6 space-y-4">
                {c.backstage.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ondeir" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <Eyebrow>{c.backstage.campaignEyebrow}</Eyebrow>
              <p className="text-2xl md:text-3xl font-bold text-ondeir-accent">
                “{c.backstage.campaignClaim}”
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.backstage.channels.map((channel) => (
                  <Badge key={channel} variant="outline" className="text-xs bg-background">
                    {channel}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* BLOCO 7 — Resultados */}
        <section
          id="resultados"
          className="bg-ondeir-deep text-ondeir-deep-foreground min-h-[85vh] flex items-center py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-ondeir">
                {c.results.eyebrow}
              </p>
              <p className="mt-8 text-[22vw] md:text-[14vw] leading-[0.85] font-bold tracking-tight">
                {c.results.bigNumber}
              </p>
              <p className="mx-auto mt-8 max-w-[640px] text-base md:text-xl text-ondeir-deep-foreground/80">
                {c.results.bigCaption}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-ondeir-deep-foreground/70">
                {c.results.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
              <p className="mt-10 text-sm font-medium text-ondeir">{c.results.footer}</p>
            </Reveal>
          </div>
        </section>

        {/* BLOCO 8 — Vídeo AWS Summit */}
        {videoId && (
          <section id="aws-summit" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <Reveal>
                <Eyebrow>{c.video.eyebrow}</Eyebrow>
                <h2 className="text-2xl md:text-4xl font-bold">{c.video.title}</h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-10 mx-auto max-w-[960px] aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                  {videoOn ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={c.video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setVideoOn(true)}
                      className="group relative h-full w-full"
                      aria-label="Reproduzir o vídeo do case no AWS Summit"
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                        alt="Apresentação do case Onde Ir no AWS Summit"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-foreground/30 transition-colors group-hover:bg-foreground/40">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ondeir text-ondeir-foreground">
                          <Play className="h-7 w-7" />
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <Divider label={c.act2Divider} />

        {/* BLOCO 9 — A virada de chave */}
        <section id="mercado" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.turningPoint.title}</h2>
              <p className="mt-6 max-w-[720px] text-muted-foreground">{c.turningPoint.text}</p>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {c.turningPoint.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 100}>
                  <Card className="h-full p-6 border-l-4 border-l-ondeir-accent">
                    <h3 className="text-lg md:text-xl font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 10 — O que mudou para virar produto */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.architecture.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.architecture.title}</h2>
              <p className="mt-4 max-w-[720px] text-muted-foreground">{c.architecture.support}</p>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-2 gap-6">
              <Reveal>
                <Card className="h-full p-6 bg-background/60 opacity-80">
                  <Badge variant="outline" className="text-xs">
                    {c.architecture.before.label}
                  </Badge>
                  <h3 className="mt-4 text-lg font-semibold text-muted-foreground">
                    {c.architecture.before.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {c.architecture.before.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>

              <Reveal delay={120}>
                <Card className="h-full p-6 border-2 border-ondeir shadow-medium">
                  <Badge className="text-xs bg-ondeir text-ondeir-foreground hover:bg-ondeir">
                    {c.architecture.after.label}
                  </Badge>
                  <h3 className="mt-4 text-lg font-semibold">{c.architecture.after.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {c.architecture.after.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-foreground/85">
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-ondeir" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <p className="mt-8 rounded-lg bg-ondeir-soft px-6 py-5 text-base md:text-lg font-semibold text-ondeir">
                {c.architecture.highlight}
              </p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {c.architecture.requirements.map((req, i) => (
                <Reveal key={req.title} delay={i * 90}>
                  <Card className="h-full p-5">
                    <h3 className="text-base font-semibold">{req.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{req.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 11 — Stack AWS */}
        <section className="bg-ondeir-deep text-ondeir-deep-foreground py-14">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow tone="dark">{c.stack.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-xl md:text-2xl font-bold">{c.stack.title}</h2>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {c.stack.rows.map((row, i) => {
                const Icon = stackIcons[i];
                return (
                  <Reveal as="li" key={row.title} delay={i * 70}>
                    <div className="flex gap-4">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-ondeir" aria-hidden="true" />
                      <p className="text-sm text-ondeir-deep-foreground/75">
                        <span className="font-semibold text-ondeir-deep-foreground">
                          {row.title}
                        </span>{" "}
                        — {row.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {c.stack.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-ondeir-deep-foreground/20 px-3 py-1 text-xs text-ondeir-deep-foreground/80"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 12 — Eficiência e retorno */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.roi.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.roi.title}</h2>
            </Reveal>
            <dl className="mt-14 grid md:grid-cols-3 gap-10">
              {c.roi.metrics.map((metric, i) => (
                <Reveal key={metric.label} delay={i * 100}>
                  <dt className="text-4xl md:text-6xl font-bold text-ondeir">{metric.value}</dt>
                  <dd className="mt-3 text-sm text-muted-foreground">{metric.label}</dd>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={120}>
              <p className="mt-12 max-w-[720px] text-muted-foreground">{c.roi.caption}</p>
            </Reveal>
          </div>
        </section>

        {/* BLOCO 13 — O produto no mercado */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.market.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.market.title}</h2>
            </Reveal>
            <Reveal delay={100}>
              <Card className="mt-10 overflow-hidden grid md:grid-cols-2">
                <img
                  src={c.market.image}
                  alt={c.market.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <p className="text-muted-foreground">{c.market.text}</p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 self-start bg-ondeir text-ondeir-foreground hover:bg-ondeir/90"
                  >
                    <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                      {c.market.cta}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* BLOCO 14 — Fechamento */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.closing.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.closing.title}</h2>
              <div className="mt-6 max-w-[720px] space-y-4 text-muted-foreground">
                {c.closing.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-ondeir text-ondeir-foreground hover:bg-ondeir/90">
                  <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                    {c.market.cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#cases">
                    <ArrowLeft className="w-4 h-4" />
                    {c.closing.backToCases}
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OndeIr;
