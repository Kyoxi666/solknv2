/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { GuidesPage } from './pages/GuidesPage';
import { GuidePage } from './pages/GuidePage';
import { ArticlePage } from './pages/ArticlePage';
import { ToolsPage } from './pages/ToolsPage';
import { ITSupportCalculatorPage } from './pages/tools/ITSupportCalculatorPage';
import { ContactPage } from './pages/ContactPage';
import { ClientPortalPage } from './pages/ClientPortalPage';
import { ManagedITPage } from './pages/services/ManagedITPage';
import { WebDevelopmentPage } from './pages/services/WebDevelopmentPage';

import { ITOutsourcingPage } from './pages/services/ITOutsourcingPage';
import { AIBusinessSolutionsPage } from './pages/services/AIBusinessSolutionsPage';
import { NetworkInfrastructurePage } from './pages/services/NetworkInfrastructurePage';
import { NetworkMonitoringPage } from './pages/services/NetworkMonitoringPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryPage } from './pages/IndustryPage';

import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative overflow-hidden bg-white text-gray-900 flex flex-col">
        <div className="fixed inset-0 bg-white pointer-events-none z-0" />
        <div className="fixed top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-300/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="fixed bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-[#b87333]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/managed-it" element={<ManagedITPage />} />
              <Route path="/services/web-development" element={<WebDevelopmentPage />} />
              <Route path="/services/it-outsourcing" element={<ITOutsourcingPage />} />
              <Route path="/services/ai-solutions" element={<AIBusinessSolutionsPage />} />
              <Route path="/services/network-infrastructure" element={<NetworkInfrastructurePage />} />
              <Route path="/services/network-monitoring" element={<NetworkMonitoringPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/:id" element={<IndustryPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:id" element={<CaseStudyPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticlePage />} />
              <Route path="/guides" element={<GuidesPage />} />
              <Route path="/guides/:id" element={<GuidePage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tools/it-support-calculator" element={<ITSupportCalculatorPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/client-portal" element={<ClientPortalPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
