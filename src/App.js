import Navbar from './Components/Navbar/navbar';
import './App.css';
import 'antd/dist/antd.min.css';
import LandingPage from './Components/LandingPage/landingPage';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Social from './Components/Social/Social';
import Skills from './Components/Skills/Skills';
import { useEffect } from 'react';

function revealEffect(){
  var reveals = document.querySelectorAll(".reveal");
  for(var i=0;i<reveals.length;i++){
    var windowHeight = window.innerHeight;
    var elementHeight = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150
    if (elementHeight < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function App() {
  
  useEffect(()=>{
    window.addEventListener("scroll",revealEffect);
  },[])

  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Skills/>
      <Work/>
      <About/>
      <Testimonials/>
      <Social/>
    </div>
  );
}

export default App;
