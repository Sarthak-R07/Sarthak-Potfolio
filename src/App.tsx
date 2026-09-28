import { Hero3D } from './components/Hero3D';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="grain min-h-screen">
      <Navbar />
      <Hero3D />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
