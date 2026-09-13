import { FileText, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface Case {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  pdfUrl?: string;
  testUrl?: string;
  pageUrl?: string;
  tags: string[];
}

const Cases = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Entregas e resultados (projetos Mercantil)
  const deliveries: Case[] = [
    {
      id: "abertura-contas-mercantil",
      title: t.cases.items.aberturaContasMercantil.title,
      subtitle: t.cases.items.aberturaContasMercantil.subtitle,
      description: t.cases.items.aberturaContasMercantil.description,
      category: t.cases.items.aberturaContasMercantil.category,
      year: "2025",
      pdfUrl: "/cases/case-abertura-contas-mercantil.pdf",
      tags: t.cases.items.aberturaContasMercantil.tags,
    },
    {
      id: "acesso-app-mercantil",
      title: t.cases.items.acessoAppMercantil.title,
      subtitle: t.cases.items.acessoAppMercantil.subtitle,
      description: t.cases.items.acessoAppMercantil.description,
      category: t.cases.items.acessoAppMercantil.category,
      year: "2024",
      pdfUrl: "/cases/case-acesso-app-mercantil.pdf",
      tags: t.cases.items.acessoAppMercantil.tags,
    },
    {
      id: "oferta-dinamica-mercantil",
      title: t.cases.items.ofertaDinamicaMercantil.title,
      subtitle: t.cases.items.ofertaDinamicaMercantil.subtitle,
      description: t.cases.items.ofertaDinamicaMercantil.description,
      category: t.cases.items.ofertaDinamicaMercantil.category,
      year: "2023",
      pdfUrl: "/cases/case-oferta-dinamica-mercantil.pdf",
      tags: t.cases.items.ofertaDinamicaMercantil.tags,
    },
  ];

  // Cases e estudos
  const studies: Case[] = [
    {
      id: "zarp-localiza",
      title: t.cases.items.zarpLocaliza.title,
      subtitle: t.cases.items.zarpLocaliza.subtitle,
      description: t.cases.items.zarpLocaliza.description,
      category: t.cases.items.zarpLocaliza.category,
      year: "2025",
      pdfUrl: "/cases/case-zarp-localiza.pdf",
      tags: t.cases.items.zarpLocaliza.tags,
    },
    {
      id: "inter-arcade",
      title: t.cases.items.interArcade.title,
      subtitle: t.cases.items.interArcade.subtitle,
      description: t.cases.items.interArcade.description,
      category: t.cases.items.interArcade.category,
      year: "2025",
      pdfUrl: "/cases/case-inter-arcade.pdf",
      tags: t.cases.items.interArcade.tags,
    },
    {
      id: "onde-ir-digital",
      title: t.cases.items.ondeIrDigital.title,
      subtitle: t.cases.items.ondeIrDigital.subtitle,
      description: t.cases.items.ondeIrDigital.description,
      category: t.cases.items.ondeIrDigital.category,
      year: "2026",
      pageUrl: "/cases/onde-ir",
      testUrl: "https://ondeir.horizonteshub.com.br",
      tags: t.cases.items.ondeIrDigital.tags,
    },
    {
      id: "mais-60-saude",
      title: t.cases.items.mais60Saude.title,
      subtitle: t.cases.items.mais60Saude.subtitle,
      description: t.cases.items.mais60Saude.description,
      category: t.cases.items.mais60Saude.category,
      year: "2026",
      pageUrl: "/cases/mais-60-saude",
      tags: t.cases.items.mais60Saude.tags,
    },
    {
      id: "atendimento-horizontes-hub",
      title: t.cases.items.atendimentoHorizontesHub.title,
      subtitle: t.cases.items.atendimentoHorizontesHub.subtitle,
      description: t.cases.items.atendimentoHorizontesHub.description,
      category: t.cases.items.atendimentoHorizontesHub.category,
      year: "2026",
      pageUrl: "/cases/atendimento-horizontes-hub",
      tags: t.cases.items.atendimentoHorizontesHub.tags,
    },
  ];


  return (
    <section id="cases" className="pt-16 pb-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.cases.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl">
            {t.cases.subtitle}
          </p>
        </div>

        {/* Entregas e resultados */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
            {t.cases.categoryDeliveries}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveries.map((caseItem, index) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} index={index} isMobile={isMobile} t={t} />
            ))}
          </div>
        </div>

        {/* Cases e estudos */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
            {t.cases.categoryCases}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((caseItem, index) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} index={index} isMobile={isMobile} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Color theme map per case id
const caseColors: Record<string, { border: string; badge: string; icon: string; button: string }> = {
  "abertura-contas-mercantil": {
    border: "border-l-green-500",
    badge: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    icon: "text-green-600 dark:text-green-400",
    button: "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800",
  },
  "oferta-dinamica-mercantil": {
    border: "border-l-purple-500",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    icon: "text-purple-600 dark:text-purple-400",
    button: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800",
  },
  "inter-arcade": {
    border: "border-l-orange-500",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    icon: "text-orange-600 dark:text-orange-400",
    button: "bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800",
  },
  "zarp-localiza": {
    border: "border-l-teal-500",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    icon: "text-teal-600 dark:text-teal-400",
    button: "bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800",
  },
  "mais-60-saude": {
    border: "border-l-violet-600",
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    icon: "text-violet-700 dark:text-violet-400",
    button: "bg-violet-700 hover:bg-violet-800 dark:bg-violet-700 dark:hover:bg-violet-800",
  },
  "onde-ir-digital": {
    border: "border-l-emerald-600",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    icon: "text-emerald-700 dark:text-emerald-400",
    button: "bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-700 dark:hover:bg-emerald-800",
  },
  "atendimento-horizontes-hub": {
    border: "border-l-sky-600",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
    icon: "text-sky-700 dark:text-sky-400",
    button: "bg-sky-700 hover:bg-sky-800 dark:bg-sky-700 dark:hover:bg-sky-800",
  },
};


const defaultColors = {
  border: "border-l-blue-500",
  badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  icon: "text-blue-600 dark:text-blue-400",
  button: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800",
};

// Extracted CaseCard component for reuse
const CaseCard = ({ caseItem, index, isMobile, t }: { caseItem: Case; index: number; isMobile: boolean; t: any }) => {
  const colors = caseColors[caseItem.id] ?? defaultColors;

  return (
  <Card
    className={`p-6 hover-scale transition-all duration-300 hover:shadow-lg border-l-4 flex flex-col h-full ${colors.border}`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex items-start justify-between mb-4">
      <Badge variant="secondary" className={colors.badge}>
        {caseItem.category}
      </Badge>
      <span className="text-sm text-muted-foreground">{caseItem.year}</span>
    </div>

    <div className="mb-4">
      <div className="flex items-start gap-3 mb-2">
        <FileText className={`w-5 h-5 mt-1 flex-shrink-0 ${colors.icon}`} />
        <h3 className="text-xl font-bold">{caseItem.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground italic mb-3">
        {caseItem.subtitle}
      </p>
      <p className="text-sm text-foreground/80 leading-relaxed">
        {caseItem.description}
      </p>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {caseItem.tags.map((tag, tagIndex) => (
        <Badge key={tagIndex} variant="outline" className="text-xs bg-muted/50">
          {tag}
        </Badge>
      ))}
    </div>

    <div className="mt-auto flex flex-col gap-2">
      {caseItem.pageUrl && (
        <Button
          variant="default"
          size="sm"
          className={`w-full ${colors.button}`}
          asChild
        >
          <Link to={caseItem.pageUrl}>
            <FileText className="w-4 h-4" />
            {t.cases.readCase}
          </Link>
        </Button>
      )}

      {caseItem.testUrl && (
        <Button
          variant={caseItem.pageUrl ? "outline" : "default"}
          size="sm"
          className={`w-full ${caseItem.pageUrl ? "" : colors.button}`}
          asChild
        >
          <a href={caseItem.testUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            {t.cases.testCase}
          </a>
        </Button>
      )}

      {caseItem.pdfUrl && (
        isMobile ? (
          <>
            <Button
              variant={caseItem.testUrl ? "outline" : "default"}
              size="sm"
              className={`w-full ${caseItem.testUrl ? "" : colors.button}`}
              asChild
            >
              <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                {t.cases.readCase}
              </a>
            </Button>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  <Eye className="w-4 h-4" />
                  {t.cases.preview || "Preview"}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[85vh]">
                <DrawerHeader className="pb-4">
                  <DrawerTitle>{caseItem.title}</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-4 h-[calc(85vh-80px)] overflow-hidden">
                  <object
                    data={caseItem.pdfUrl}
                    type="application/pdf"
                    className="w-full h-full rounded-lg border border-border"
                  >
                    <div className="flex flex-col items-center justify-center gap-4 p-6 h-full">
                      <FileText className="w-12 h-12 text-muted-foreground" />
                      <p className="text-muted-foreground text-center">
                        {t.cases.pdfViewError}
                      </p>
                      <Button asChild>
                        <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.cases.openPdfNewTab}
                        </a>
                      </Button>
                    </div>
                  </object>
                </div>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={caseItem.testUrl ? "outline" : "default"}
                size="sm"
                className={`w-full ${caseItem.testUrl ? "" : colors.button}`}
              >
                <FileText className="w-4 h-4" />
                {t.cases.readCase}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[95vh] p-4 sm:p-6">
              <DialogHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center justify-between gap-4">
                  <DialogTitle className="flex-1">{caseItem.title}</DialogTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.cases.openPdfNewTab}
                    </a>
                  </Button>
                </div>
              </DialogHeader>
              <div className="w-full h-[calc(95vh-120px)] overflow-hidden rounded-lg border border-border">
                <object
                  data={caseItem.pdfUrl}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="flex flex-col items-center justify-center gap-6 p-8 h-full">
                    <FileText className="w-16 h-16 text-muted-foreground" />
                    <p className="text-muted-foreground text-center text-lg">
                      {t.cases.pdfViewError}
                    </p>
                    <Button size="lg" asChild>
                      <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {t.cases.openPdfNewTab}
                      </a>
                    </Button>
                  </div>
                </object>
              </div>
            </DialogContent>
          </Dialog>
        )
      )}
    </div>
  </Card>
  );
};

export default Cases;
