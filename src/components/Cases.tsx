import { FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Case {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  pdfUrl: string;
  tags: string[];
}

const Cases = () => {
  const { t } = useLanguage();

  const cases: Case[] = [
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
      id: "acesso-app-mercantil",
      title: t.cases.items.acessoAppMercantil.title,
      subtitle: t.cases.items.acessoAppMercantil.subtitle,
      description: t.cases.items.acessoAppMercantil.description,
      category: t.cases.items.acessoAppMercantil.category,
      year: "2024",
      pdfUrl: "/cases/case-acesso-app-mercantil.pdf",
      tags: t.cases.items.acessoAppMercantil.tags,
    },
  ];

  return (
    <section id="cases" className="py-20 pb-5 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t.cases.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.cases.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <Card
              key={caseItem.id}
              className="p-6 hover-scale transition-all duration-300 hover:shadow-lg border-l-4 border-l-purple-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant="secondary" 
                  className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                >
                  {caseItem.category}
                </Badge>
                <span className="text-sm text-muted-foreground">{caseItem.year}</span>
              </div>

              <div className="mb-4">
                <div className="flex items-start gap-3 mb-2">
                  <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
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
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="text-xs bg-muted/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
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
                        <a
                          href={caseItem.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                          <a
                            href={caseItem.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            {t.cases.openPdfNewTab}
                          </a>
                        </Button>
                      </div>
                    </object>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
