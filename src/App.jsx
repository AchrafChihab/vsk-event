import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';
import ReviewsPage from './pages/ReviewsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServicesPage from './pages/ServicesPage';
import { serviceDetails } from './data/services';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/prestations" element={<ServicesPage />} />
          <Route path="/prestations/mariages" element={<ServiceDetailPage service={serviceDetails.mariage} />} />
          <Route path="/prestations/soirees-privees" element={<ServiceDetailPage service={serviceDetails['soiree-privee']} />} />
          <Route path="/prestations/entreprises" element={<ServiceDetailPage service={serviceDetails.entreprise} />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/avis" element={<ReviewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
