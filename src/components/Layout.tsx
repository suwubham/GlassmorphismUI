import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingCards from "./FloatingCards";
import { Routes, Route, useLocation } from "react-router-dom";
import ThankYou from "./ThankYou";

export const Layout = () =>{
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/thank-you";

  return (
    <div className="min-h-screen relative">
      <FloatingCards />
      {!hideNavbarFooter && <Navbar />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Pricing />
                <Contact />
              </>
            }
          />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}
