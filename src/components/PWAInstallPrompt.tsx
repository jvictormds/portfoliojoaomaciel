import { Download, X, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePWAInstall } from "@/hooks/use-pwa-install";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

const PWAInstallPrompt = () => {
  const { isInstallable, isIOS, promptInstall, dismiss } = usePWAInstall();
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  // Only show on mobile devices when installable
  if (!isMobile || !isInstallable) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <Card className="p-4 shadow-lg border-primary/20 bg-card/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {isIOS ? (
              <Share className="w-5 h-5 text-primary" />
            ) : (
              <Download className="w-5 h-5 text-primary" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-foreground">
              {t.pwa.installTitle}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isIOS ? t.pwa.installDescriptionIOS : t.pwa.installDescription}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {!isIOS && (
              <Button size="sm" onClick={promptInstall}>
                {t.pwa.installButton}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={dismiss}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;
