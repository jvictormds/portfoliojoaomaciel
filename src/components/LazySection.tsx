import { useInView } from "react-intersection-observer";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  fallbackHeight?: string;
  className?: string;
}

const LazySection = ({ children, fallbackHeight = "400px", className = "" }: LazySectionProps) => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Verifica suporte ao IntersectionObserver
    setIsSupported(typeof window !== 'undefined' && 'IntersectionObserver' in window);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  // Fallback: se não suportado, renderiza diretamente
  if (!isSupported) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} style={{ minHeight: inView ? "auto" : fallbackHeight }}>
      {inView ? children : (
        <div className="flex items-center justify-center" style={{ height: fallbackHeight }}>
          <div className="w-full max-w-4xl mx-auto px-4 space-y-4">
            <Skeleton className="h-8 w-48 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LazySection;
