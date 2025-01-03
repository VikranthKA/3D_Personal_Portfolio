import { BrowserRouter } from 'react-router-dom';
import About from "./components/About"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Feedbacks from "./components/Feedbacks"
import Tech from "./components/Tech"
import Works from "./components/Works"
import Contact from "./components/Contact"
import "./index.css";
import EarthCanvas from './components/canvas/Earth';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          
        </div>


        
      </div>
    </BrowserRouter>
  );
};

export default App;





