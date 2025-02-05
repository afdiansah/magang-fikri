import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FaqComponent from "./components/FaqComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import PortfolioPage from "./pages/PortfolioPage";
import LyricPage from "./pages/LyricPage";
import InstrumenPage from "./pages/InstrumenPage";
import SoundPage from "./pages/SoundPage";
import Dashboard from "./pages/Dashboard";
import AdminLoginPage from "./pages/AdminLoginPage";

function App() {
  const location = useLocation(); // Ambil lokasi URL saat ini
  const isAdminPage = location.pathname.startsWith("/admin") && location.pathname !== "admin/login"; // Cek apakah halaman admin

  return (
    <div>
      {/* Tampilkan FAQ dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <NavbarComponent />}

      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/lyric" element={<LyricPage />} />
        <Route path="/instrumen" element={<InstrumenPage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} /> {/* Admin Login Page Route */}
        <Route path="/admin/*" element={<Dashboard />} />
      </Routes>

      {/* Tampilkan FAQ dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <FaqComponent />}
      {!isAdminPage && <FooterComponent />}
    </div>
  );
}

export default App;
