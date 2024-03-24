import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import AboutUsPage from "./pages/about-us/about-us-page";
import VisionMissionPage from "./pages/about-us/vision-mission-page";
import ContactUsPage from "./pages/about-us/contact-us-page";
import PrivacyPolicyPage from "./pages/about-us/privacy-policy-page";

function App() {
  return (
    <div className="container py-3">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us">
          <Route index element={<AboutUsPage />} />
          <Route path="vision-mission" element={<VisionMissionPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
