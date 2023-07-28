import "./Style/App.css"
import Header from './Components/header';
import Hero from './Components/hero';
import Intro from './Components/Intro';
import Testimonial from './Components/Testimonial';
import Contact from './Components/contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;