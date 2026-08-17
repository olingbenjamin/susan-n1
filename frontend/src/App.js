import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";
import MasterHub from "@/pages/MasterHub";
import Nourish from "@/pages/Nourish";
import Prosper from "@/pages/Prosper";
import Speaking from "@/pages/Speaking";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App grain">
      <BrowserRouter>
        <SmoothScroll>
          <ScrollToTop />
          <Toaster position="top-center" richColors />
          <Routes>
            <Route path="/" element={<MasterHub />} />
            <Route path="/nourish-and-thrive" element={<Nourish />} />
            <Route path="/women-prosper" element={<Prosper />} />
            <Route path="/speaking-and-workshops" element={<Speaking />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
