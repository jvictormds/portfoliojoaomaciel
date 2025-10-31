import { FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

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
  ];

  return (
    <section id="cases" className="py-20 bg-muted/30">
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

              <Button
                variant="default"
                size="sm"
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
                asChild
              >
                <a
                  href={caseItem.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  {t.cases.readCase}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
