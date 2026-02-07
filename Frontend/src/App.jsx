import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import DSAStats from './pages/DSAStats'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Footer from './Component/Footer'
import { ToastContainer } from 'react-toastify'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active"); // 👈 THIS enables repeat
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);



  return (
    
    <>
      <div className=' animate-fade-up' >

      <ToastContainer/>
      <Navbar />
      <Home/>
      <Projects/>
      <About/>
      <DSAStats/>
      <Achievements/>
      <Contact/>
      <Footer/>
      </div>

       
    </>
  )
}

export default App
