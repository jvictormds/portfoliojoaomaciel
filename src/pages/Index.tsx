import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LazySection from "@/components/LazySection";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

// Lazy load seções abaixo da dobra
const About = lazy(() => import("@/components/About"));
const Cases = lazy(() => import("@/components/Cases"));
const Experience = lazy(() => import("@/components/Experience"));
const Education = lazy(() => import("@/components/Education"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero carrega imediatamente - acima da dobra */}
        <Hero />
        
        {/* Seções lazy - carregam quando próximas da viewport */}
        <LazySection fallbackHeight="300px">
          <Suspense fallback={null}>
            <About />
          </Suspense>
        </LazySection>
        
        <LazySection fallbackHeight="600px">
          <Suspense fallback={null}>
            <Cases />
          </Suspense>
        </LazySection>
        
        <LazySection fallbackHeight="500px">
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </LazySection>
        
        <LazySection fallbackHeight="400px">
          <Suspense fallback={null}>
            <Education />
          </Suspense>
        </LazySection>
        
        <LazySection fallbackHeight="300px">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </LazySection>
      </main>
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;
