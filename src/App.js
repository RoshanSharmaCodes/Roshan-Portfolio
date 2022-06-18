import Navbar from './Components/Navbar/navbar';
import './App.css';
import 'antd/dist/antd.min.css';
import LandingPage from './Components/LandingPage/landingPage';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Social from './Components/Social/Social';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <About/>
      <Work/>
      <Testimonials/>
      <Social/>
    </div>
  );
}

export default App;
