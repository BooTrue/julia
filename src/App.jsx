import { BrowserRouter } from "react-router-dom";
import { About, Services, Hero, Navbar, Slider, StarsCanvas, Contact } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#F9F4E9]'>
        <StarsCanvas />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Slider />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
