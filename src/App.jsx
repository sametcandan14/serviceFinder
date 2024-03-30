import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import AboutUsPage from "./pages/about-us/about-us-page";
import VisionMissionPage from "./pages/about-us/vision-mission-page";
import ContactUsPage from "./pages/about-us/contact-us-page";
import PrivacyPolicyPage from "./pages/about-us/privacy-policy-page";
import LoginPage from "./pages/auth/login-page";
import RegisterPage from "./pages/auth/register-page";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { useEffect } from "react";
import { setCategories } from "./redux/categorySlice";
import CategoryDetailPage from "./pages/category-detail-page";

function App() {
  const categoryState = useSelector((state) => state.categoryState);

  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await api.get("categories");

      dispatch(setCategories(response.data));
    })();
  }, []);
  return (
    <div className="container py-3">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="category/:slug" element={<CategoryDetailPage />} />
        <Route path="/about-us">
          <Route index element={<AboutUsPage />} />
          <Route path="vision-mission" element={<VisionMissionPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
