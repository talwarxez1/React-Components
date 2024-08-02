import React from "react";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import MarqueeLogos from "./components/MarqueeLogos";
import Footer from "./components/Footer";
import LandingPage from './components/LandingPage'
import VideoComp from './components/VideoComp'
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import MiniChatbot from "./components/ChatBot";



const App = () => {
  return (
    <>
    <BrowserRouter>
     <NavBar /> `
     <MiniChatbot />
     <Routes>
     <Route path="*" element={<NotFound/>} />
     <Route path="/" element={<Home/>} />
     <Route path="/course1" element={<h1 className="text-5xl">Course 1</h1>} />
     <Route path="/course2" element={<h1
     className="text-5xl">Course 2</h1>} />
     <Route path="/course3" element={<h1
     className="text-5xl">Course 3</h1>} />
    </Routes>
    </BrowserRouter>
    <section className='bottom-0'>z
      
      <Footer/>
      </section>
     </>
  );
};

export default App;
