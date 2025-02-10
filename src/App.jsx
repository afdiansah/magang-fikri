import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FaqComponent from "./components/FaqComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/homePage";
import SupportPage from "./pages/SupportPage";
import PortfolioPage from "./pages/PortfolioPage";
import LyricsPage from "./pages/LyricsPage";
import InstrumenPage from "./pages/InstrumentPage";
import SoundPage from "./pages/SoundPage";
import Dashboard from "./pages/Dashboard";
import AdminLoginPage from "./pages/AdminLoginPage";
import ModalForm from "./pages/ModalForm";
import TabelPortofolio from "./pages/Adminportofolio";

function App() {
  const location = useLocation(); // Ambil lokasi URL saat ini
  const isAdminPage =
    location.pathname.startsWith("/admin") &&
    location.pathname !== "admin/login" || // Cek apakah halaman admin
    location.pathname === "/tabelportofolio";// Cek apakah halaman portofolio

  return (
    <div>
      {/* Tampilkan Navbar hanya jika bukan halaman admin dan halaman ModalForm */}
      {!isAdminPage && location.pathname !== "/checkout" && (
        <NavbarComponent />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/musik-lyric" element={<LyricsPage />} />
        <Route path="/musik-instrument" element={<InstrumenPage />} />
        <Route path="/sound-effect" element={<SoundPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />{" "}
        <Route path="/checkout" element={<ModalForm />} />
        <Route path="/tabelportofolio" element={<TabelPortofolio />} />
        
        {/* Admin Login Page Route */}
        <Route path="/admin/*" element={<Dashboard />} />
        
      </Routes>

      {/* Tampilkan FAQ dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <FaqComponent />}
      {!isAdminPage && location.pathname !== "/checkout" && (
        <NavbarComponent />
      )}
      {!isAdminPage && <FooterComponent />}
    </div>
  );
}

export default App;
