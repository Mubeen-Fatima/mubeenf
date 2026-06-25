import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Services } from './components/sections/Services/Services';
import { Portfolio } from './components/sections/Portfolio/Portfolio';
import { TechStack } from './components/sections/TechStack/TechStack';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/sections/Footer/Footer';

import './styles/variables.css';
import './styles/base.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <TechStack />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
