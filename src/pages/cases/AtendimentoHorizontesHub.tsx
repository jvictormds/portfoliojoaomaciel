import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  Linkedin,
  Rocket,
  Bot,
  Route,
  TrendingUp,
  Sparkles,
  MessageCircle,
  ScanSearch,
  Briefcase,
  Library,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/cases/Reveal";
import PhoneFrame from "@/components/cases/PhoneFrame";
import { horizontesHubCase as c } from "@/data/horizontesHubCase";

const heroIcons = {
  rocket: Rocket,
  bot: Bot,
  route: Route,
  chart: TrendingUp,
} as const;

const learningIcons = {
  sparkles: Sparkles,
  message: MessageCircle,
  scan: ScanSearch,
  briefcase: Briefcase,
  library: Library,
  route: Route,
} as const;

const Eyebrow = ({ children }: { children: string }) => (
  <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] mb-4 text-hub">
    {children}
  </p>
);

const AtendimentoHorizontesHub = () => {
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
    canonical.href = `${window.location.origin}/cases/atendimento-horizontes-hub`;

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
                  className="text-sm text-muted-foreground hover:text-hub transition-colors whitespace-nowrap"
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {/* SEÇÃO 1 — Hero */}
        <header className="pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
              <div>
                <Reveal>
                  <Eyebrow>{c.hero.eyebrow}</Eyebrow>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">{c.hero.title}</h1>
                  <p className="mt-6 max-w-[640px] text-lg text-muted-foreground">
                    {c.hero.subtitle}
                  </p>
                </Reveal>

                <Reveal delay={120}>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {c.hero.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-muted/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={200} className="mx-auto w-full max-w-[280px]">
                <PhoneFrame
                  src={c.product.screens[0].src}
                  alt="Conversa de boas-vindas do agente de atendimento do Horizontes Hub no WhatsApp"
                  priority
                />
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  {c.hero.demoNote}
                </p>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {c.hero.highlights.map((item) => {
                  const Icon = heroIcons[item.icon as keyof typeof heroIcons];
                  return (
                    <li key={item.label}>
                      <Card className="h-full p-5 flex items-center gap-3 border-t-4 border-t-hub">
                        <Icon className="w-5 h-5 flex-shrink-0 text-hub" aria-hidden="true" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Card>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </header>

        {/* SEÇÃO 2 — O desafio */}
        <section id="desafio" className="bg-hub-deep text-hub-deep-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.challenge.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.challenge.title}</h2>
              <div className="mt-6 max-w-[720px] space-y-4 text-hub-deep-foreground/75">
                {c.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-12 text-xs uppercase tracking-[0.18em] text-hub-deep-foreground/60">
                {c.challenge.audiencesLabel}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.challenge.audiences.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hub-deep-foreground/20 px-4 py-1.5 text-sm text-hub-deep-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
                <div className="rounded-lg border border-hub-deep-foreground/15 bg-hub-deep-foreground/5 p-6">
                  <Badge
                    variant="outline"
                    className="border-hub-deep-foreground/30 text-hub-deep-foreground/80"
                  >
                    {c.challenge.before.label}
                  </Badge>
                  <ul className="mt-4 space-y-2 text-sm text-hub-deep-foreground/70">
                    {c.challenge.before.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <ArrowRight
                  className="mx-auto w-6 h-6 rotate-90 md:rotate-0 text-hub"
                  aria-hidden="true"
                />

                <div className="rounded-lg border border-hub/40 bg-hub/10 p-6">
                  <Badge className="bg-hub text-hub-foreground hover:bg-hub">
                    {c.challenge.after.label}
                  </Badge>
                  <ul className="mt-4 space-y-2 text-sm text-hub-deep-foreground/90">
                    {c.challenge.after.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 3 — Objetivos */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.goals.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.goals.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.goals.items.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <Card className="h-full p-6">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-hub-soft text-sm font-bold text-hub">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-sm font-medium leading-relaxed">{item}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — O produto na prática */}
        <section id="experiencia" className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.product.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.product.title}</h2>
              <p className="mt-4 text-sm text-muted-foreground">{c.hero.demoNote}</p>
            </Reveal>

            <ul className="mt-12 flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-4 md:overflow-visible">
              {c.product.screens.slice(0, 4).map((screen, i) => (
                <Reveal
                  as="li"
                  key={screen.title}
                  delay={i * 100}
                  className="snap-center flex-shrink-0 w-[80%] sm:w-[55%] md:w-auto"
                >
                  <PhoneFrame src={screen.src} alt={`Atendimento Horizontes Hub: ${screen.title}`} />
                  <h3 className="mt-6 text-lg font-semibold">
                    {i + 1}. {screen.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {screen.description}
                  </p>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <Card className="mt-16 overflow-hidden border-2 border-hub bg-background">
                <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10 items-center">
                  <PhoneFrame
                    src={c.product.screens[4].src}
                    alt={`Atendimento Horizontes Hub: ${c.product.screens[4].title}`}
                  />
                  <div>
                    <Badge className="bg-hub text-hub-foreground hover:bg-hub">
                      {c.product.highlightBadge}
                    </Badge>
                    <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                      5. {c.product.screens[4].title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {c.product.screens[4].description}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 5 — Como o agente funciona */}
        <section id="arquitetura" className="bg-hub-deep text-hub-deep-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.flow.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.flow.title}</h2>
            </Reveal>

            <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {c.flow.steps.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 70}>
                  <div className="flex h-full items-center gap-3 rounded-lg border border-hub-deep-foreground/15 bg-hub-deep-foreground/5 px-5 py-4">
                    <span className="text-sm font-bold text-hub">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={140}>
              <p className="mt-10 text-xs uppercase tracking-[0.18em] text-hub-deep-foreground/60">
                {c.flow.destinationsLabel}
              </p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {c.flow.destinations.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-hub/40 bg-hub/10 px-4 py-2 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 6 — Capacidades */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.capabilities.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.capabilities.title}</h2>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.capabilities.items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 50}>
                  <Card className="h-full p-5 flex items-start gap-3">
                    <Check className="mt-0.5 w-4 h-4 flex-shrink-0 text-hub-accent" aria-hidden="true" />
                    <span className="text-sm font-medium">{item}</span>
                  </Card>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* SEÇÃO 7 — Inteligência de negócio */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.business.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.business.title}</h2>
              <p className="mt-4 max-w-[720px] text-muted-foreground">{c.business.intro}</p>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {c.business.journeys.map((journey, i) => (
                <Reveal key={journey.intent} delay={i * 80}>
                  <Card className="h-full p-6 bg-background">
                    <p className="text-base font-semibold">“{journey.intent}”</p>
                    <ol className="mt-5 space-y-3">
                      {journey.steps.map((step) => (
                        <li key={step} className="flex items-center gap-3 text-sm">
                          <ArrowRight className="w-4 h-4 flex-shrink-0 text-hub" aria-hidden="true" />
                          <span className="text-foreground/85">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 8 — Tecnologias */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.stack.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.stack.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.stack.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 60}>
                  <Card className="h-full p-6">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 9 — Conhecimentos aplicados */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.learnings.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.learnings.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.learnings.items.map((item, i) => {
                const Icon = learningIcons[item.icon as keyof typeof learningIcons];
                return (
                  <Reveal key={item.name} delay={i * 70}>
                    <Card className="h-full p-6 bg-background">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-hub-soft text-hub">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-hub">
                        {item.name}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO 10 — Minha atuação */}
        <section id="atuacao" className="bg-hub-deep text-hub-deep-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.role.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.role.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.role.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 70}>
                  <div className="h-full rounded-lg border border-hub-deep-foreground/15 bg-hub-deep-foreground/5 p-6">
                    <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm text-hub-deep-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 11 — Encerramento */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.closing.title}</h2>
              <div className="mt-6 max-w-[720px] space-y-4 text-muted-foreground">
                {c.closing.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-hub text-hub-foreground hover:bg-hub/90">
                  <Link to="/#cases">
                    <ArrowLeft className="w-4 h-4" />
                    {c.closing.backToCases}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={c.closing.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    {c.closing.linkedin}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={c.closing.cvUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    {c.closing.cv}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AtendimentoHorizontesHub;
