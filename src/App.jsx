import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Intro />
          <main id="content" className="pt-24 lg:w-[60%] lg:py-24">
            <section
              id="about"
              className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <About />
              <span className="absolute inset-x-48 -bottom-16 hidden h-1 scale-x-50 rounded-full bg-primary/10 md:block"></span>
            </section>
            <section
              id="experience"
              className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <Experience />
              <span className="absolute inset-x-48 -bottom-16 hidden h-1 scale-x-50 rounded-full bg-primary/10 md:block"></span>
            </section>
            <section
              id="projects"
              className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Projects created by me"
            >
              <Projects />
              <span className="absolute inset-x-48 -bottom-16 hidden h-1 scale-x-50 rounded-full bg-primary/10 md:block"></span>
            </section>
            <section
              id="contact"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Contact me"
            >
              <Contact />
            </section>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;