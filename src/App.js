import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./comps/footer/Footer";
import About_sec from "./comps/about/About_sec";
import Header from "./comps/header/Header";
import Pagetop from "./comps/pagetop/Pagetop";
import PopUp from "./comps/model/PopUp";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import PageToTop from "./comps/pagetotop/PageToTop";
import Error from "./pages/error/Error";


function App() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setToggle(true)
    }, 2000);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        {/* <Footer /> */}
        <Toaster position="top-center" reverseOrder={false} />
      {/* <Header/> */}
      {toggle && <PopUp close={()=>setToggle(false)}/>}
    <PageToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Pagetop />} />
          <Route path="*" element={<Error />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;