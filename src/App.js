import "./App.css";
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div >
      <Navbar />
      <Carousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
