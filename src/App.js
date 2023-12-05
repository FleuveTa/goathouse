import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Mobile from "./Components/Mobile";
import { useState, useEffect } from "react";
import ComputerCat from "./Assets/ComputerCat.jpg"

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 767); 
    };

    window.addEventListener('resize', checkIsMobile);

    checkIsMobile();

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  return (
    <>
      {!isMobile ? (
      <div className="App">
        <Home />
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Mobile />
        <Footer />
      </div>
    ) : (
        <div id="error-page">
          <img width="300px" height="300px" src={ComputerCat}/>
          <h1>Không thể xem trên thiết bị di động!</h1>
          <p>Vui lòng truy cập thông qua PC</p>
        </div>
    )}
    </>  
  );
}

export default App;
