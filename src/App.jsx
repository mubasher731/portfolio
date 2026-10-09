/* Layout */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import ThemeProvider from "./theme/ThemeProvider";

/* Sections */
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Publications from "./components/sections/Publications";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-ink-950 font-sans text-slate-300">
        {/* Fixed ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-[var(--ambient-opacity)]"
        >
          <div className="grid-bg absolute inset-0 opacity-70" />
          <div className="absolute -left-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[130px]" />
          <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/12 blur-[140px]" />
          <div className="absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-ink-950/50 to-ink-950" />
        </div>

        <Navbar />

        <main>
          <Hero />
          <About />
          <Education />
          <Publications />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
