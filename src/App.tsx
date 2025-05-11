import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCards from "./components/FloatingCards";
import { useEffect } from "react";

function App() {
  // Add scroll observer for section animations
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // When section is in view, add animation class
        if (entry.isIntersecting) {
          entry.target.classList.add("section-active");

          // Remove class after animation completes
          setTimeout(() => {
            entry.target.classList.remove("section-active");
          }, 2000);
        }
      });
    };

    // Set up intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3, // Trigger when 30% of the section is visible
    });

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Clean up
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="min-h-screen relative">
      <FloatingCards />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
