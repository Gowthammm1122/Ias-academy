import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WelcomePopup, ContactPopup, AdmissionPopup } from '../components/Popups';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ScrollToTop } from '../components/ScrollToTop';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />

      {/* Popups */}
      <WelcomePopup />
      <AdmissionPopup />
      <ContactPopup />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
