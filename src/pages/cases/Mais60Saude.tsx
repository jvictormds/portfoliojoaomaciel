import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Download,
  Linkedin,
  Stethoscope,
  Smartphone,
  Bot,
  Heart,
  ClipboardList,
  AlertTriangle,
  Database,
  NotebookPen,
  BookOpen,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/cases/Reveal";
import PhoneFrame from "@/components/cases/PhoneFrame";
import { mais60Case as c } from "@/data/mais60Case";

const heroIcons = {
  stethoscope: Stethoscope,
  phone: Smartphone,
  bot: Bot,
  heart: Heart,
} as const;

const goalIcons = {
  clipboard: ClipboardList,
  alert: AlertTriangle,
  database: Database,
  notebook: NotebookPen,
  book: BookOpen,
  message: MessageCircle,
} as const;

const Eyebrow = ({ children }: { children: string }) => (
  <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] mb-4 text-mais60">
    {children}
  </p>
);

const Mais60Saude = () => {
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
    canonical.href = `${window.location.origin}/cases/mais-60-saude`;

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
                  className="text-sm text-muted-foreground hover:text-mais60 transition-colors whitespace-nowrap"
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

              <Reveal delay={200}>
                <PhoneFrame
                  src={c.product.screens[0].src}
                  alt="Conversa de boas-vindas do agente Mais 60 Saúde no WhatsApp"
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
                      <Card className="h-full p-5 flex items-center gap-3 border-t-4 border-t-mais60">
                        <Icon className="w-5 h-5 flex-shrink-0 text-mais60" aria-hidden="true" />
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
        <section id="desafio" className="bg-mais60-deep text-mais60-deep-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.challenge.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.challenge.title}</h2>
              <div className="mt-6 max-w-[720px] space-y-4 text-mais60-deep-foreground/75">
                {c.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-12 text-xs uppercase tracking-[0.18em] text-mais60-deep-foreground/60">
                {c.challenge.painsLabel}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.challenge.pains.map((pain) => (
                  <li
                    key={pain}
                    className="rounded-full border border-mais60-deep-foreground/20 px-4 py-1.5 text-sm text-mais60-deep-foreground/80"
                  >
                    {pain}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
                <div className="rounded-lg border border-mais60-deep-foreground/15 bg-mais60-deep-foreground/5 p-6">
                  <Badge
                    variant="outline"
                    className="border-mais60-deep-foreground/30 text-mais60-deep-foreground/80"
                  >
                    {c.challenge.before.label}
                  </Badge>
                  <ul className="mt-4 space-y-2 text-sm text-mais60-deep-foreground/70">
                    {c.challenge.before.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <ArrowRight
                  className="mx-auto w-6 h-6 rotate-90 md:rotate-0 text-mais60"
                  aria-hidden="true"
                />

                <div className="rounded-lg border border-mais60/40 bg-mais60/10 p-6">
                  <Badge className="bg-mais60 text-mais60-foreground hover:bg-mais60">
                    {c.challenge.after.label}
                  </Badge>
                  <ul className="mt-4 space-y-2 text-sm text-mais60-deep-foreground/90">
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

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.goals.items.map((item, i) => {
                const Icon = goalIcons[item.icon as keyof typeof goalIcons];
                return (
                  <Reveal key={item.text} delay={i * 80}>
                    <Card className="h-full p-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-mais60-soft text-mais60">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </span>
                      <p className="mt-4 text-base font-medium leading-relaxed">{item.text}</p>
                    </Card>
                  </Reveal>
                );
              })}
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

            <ul className="mt-12 flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible">
              {c.product.screens.slice(0, 3).map((screen, i) => (
                <Reveal
                  as="li"
                  key={screen.title}
                  delay={i * 100}
                  className="snap-center flex-shrink-0 w-[80%] sm:w-[55%] md:w-auto"
                >
                  <PhoneFrame src={screen.src} alt={`Mais 60 Saúde: ${screen.title}`} />
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
              <Card className="mt-16 overflow-hidden border-2 border-mais60 bg-background">
                <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10 items-center">
                  <PhoneFrame
                    src={c.product.screens[3].src}
                    alt={`Mais 60 Saúde: ${c.product.screens[3].title}`}
                  />
                  <div>
                    <Badge className="bg-mais60 text-mais60-foreground hover:bg-mais60">
                      {c.product.highlightBadge}
                    </Badge>
                    <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                      4. {c.product.screens[3].title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {c.product.screens[3].description}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 5 — Como o agente funciona */}
        <section
          id="arquitetura"
          className="bg-mais60-deep text-mais60-deep-foreground py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.flow.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.flow.title}</h2>
            </Reveal>

            <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {c.flow.steps.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 70}>
                  <div className="flex h-full items-center gap-3 rounded-lg border border-mais60-deep-foreground/15 bg-mais60-deep-foreground/5 px-5 py-4">
                    <span className="text-sm font-bold text-mais60">0{i + 1}</span>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SEÇÃO 6 — Escopo funcional */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.scope.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.scope.title}</h2>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Reveal>
                <Card className="h-full p-6 border-l-4 border-l-mais60-accent">
                  <h3 className="text-lg font-semibold text-mais60-accent">{c.scope.does.label}</h3>
                  <ul className="mt-5 space-y-3">
                    {c.scope.does.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground/85">
                        <Check
                          className="mt-0.5 w-4 h-4 flex-shrink-0 text-mais60-accent"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>

              <Reveal delay={100}>
                <Card className="h-full p-6 border-l-4 border-l-destructive">
                  <h3 className="text-lg font-semibold text-destructive">
                    {c.scope.doesNot.label}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {c.scope.doesNot.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground/85">
                        <X
                          className="mt-0.5 w-4 h-4 flex-shrink-0 text-destructive"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 rounded-lg bg-mais60-soft p-6">
                <ShieldCheck className="w-6 h-6 flex-shrink-0 text-mais60" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-mais60">{c.scope.responsibleTitle}</p>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    {c.scope.responsibleText}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 7 — Tecnologias */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.stack.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.stack.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.stack.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 70}>
                  <Card className="h-full p-6 bg-background">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 8 — Conhecimentos aplicados */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.learnings.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-2xl md:text-4xl font-bold">{c.learnings.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {c.learnings.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 70}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mais60">
                    {item.name}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 9 — Minha atuação */}
        <section
          id="atuacao"
          className="bg-mais60-deep text-mais60-deep-foreground py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <Reveal>
              <Eyebrow>{c.role.eyebrow}</Eyebrow>
              <h2 className="text-2xl md:text-4xl font-bold">{c.role.title}</h2>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.role.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 70}>
                  <div className="h-full rounded-lg border border-mais60-deep-foreground/15 bg-mais60-deep-foreground/5 p-6">
                    <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm text-mais60-deep-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 10 — Encerramento */}
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
                <Button
                  asChild
                  size="lg"
                  className="bg-mais60 text-mais60-foreground hover:bg-mais60/90"
                >
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

export default Mais60Saude;
