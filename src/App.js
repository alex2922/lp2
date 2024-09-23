import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./comps/footer/Footer";
import About_sec from "./comps/about/About_sec";
import Header from "./comps/header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <About_sec />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
