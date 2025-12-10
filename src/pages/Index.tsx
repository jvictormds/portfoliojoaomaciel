import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Cases from "@/components/Cases";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
        <Experience />
        <Education />
        <Contact />
      </main>
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;
