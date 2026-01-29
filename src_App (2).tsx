import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { Activities } from './components/Activities';
import { Contact, Footer } from './components/Contact';

export function App() {
  return (
    <div className="font-nunito antialiased">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Skills />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
