import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Pipeline } from "@/components/Pipeline";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { MouseFollower } from "@/components/MouseFollower";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MouseFollower />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Pipeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
