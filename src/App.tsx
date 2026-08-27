/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

const ServicesPage = lazy(() => import('./pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(({ CaseStudiesPage }) => ({ default: CaseStudiesPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(({ CaseStudyPage }) => ({ default: CaseStudyPage })));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage').then(({ ArticlesPage }) => ({ default: ArticlesPage })));
const GuidesPage = lazy(() => import('./pages/GuidesPage').then(({ GuidesPage }) => ({ default: GuidesPage })));
const GuidePage = lazy(() => import('./pages/GuidePage').then(({ GuidePage }) => ({ default: GuidePage })));
const ArticlePage = lazy(() => import('./pages/ArticlePage').then(({ ArticlePage }) => ({ default: ArticlePage })));
const ToolsPage = lazy(() => import('./pages/ToolsPage').then(({ ToolsPage }) => ({ default: ToolsPage })));
const ITSupportCalculatorPage = lazy(() => import('./pages/tools/ITSupportCalculatorPage').then(({ ITSupportCalculatorPage }) => ({ default: ITSupportCalculatorPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(({ ContactPage }) => ({ default: ContactPage })));
const ClientPortalPage = lazy(() => import('./pages/ClientPortalPage').then(({ ClientPortalPage }) => ({ default: ClientPortalPage })));
const ManagedITPage = lazy(() => import('./pages/services/ManagedITPage').then(({ ManagedITPage }) => ({ default: ManagedITPage })));
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage').then(({ WebDevelopmentPage }) => ({ default: WebDevelopmentPage })));
const ITOutsourcingPage = lazy(() => import('./pages/services/ITOutsourcingPage').then(({ ITOutsourcingPage }) => ({ default: ITOutsourcingPage })));
const AIBusinessSolutionsPage = lazy(() => import('./pages/services/AIBusinessSolutionsPage').then(({ AIBusinessSolutionsPage }) => ({ default: AIBusinessSolutionsPage })));
const NetworkInfrastructurePage = lazy(() => import('./pages/services/NetworkInfrastructurePage').then(({ NetworkInfrastructurePage }) => ({ default: NetworkInfrastructurePage })));
const NetworkMonitoringPage = lazy(() => import('./pages/services/NetworkMonitoringPage').then(({ NetworkMonitoringPage }) => ({ default: NetworkMonitoringPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(({ PrivacyPolicyPage }) => ({ default: PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(({ TermsOfServicePage }) => ({ default: TermsOfServicePage })));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-full focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to content
      </a>
      {/* Grain noise overlay — fixed, non-interactive */}
      <div className="grain-overlay" aria-hidden="true" />
      <div className="min-h-screen relative overflow-hidden bg-black text-white flex flex-col">
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          <main id="main-content" className="flex-grow">
            <Suspense fallback={<div className="min-h-[40vh]" role="status" aria-live="polite"><span className="sr-only">Loading page…</span></div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/managed-it" element={<ManagedITPage />} />
                <Route path="/services/web-development" element={<WebDevelopmentPage />} />
                <Route path="/services/it-outsourcing" element={<ITOutsourcingPage />} />
                <Route path="/services/ai-solutions" element={<AIBusinessSolutionsPage />} />
                <Route path="/services/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/services/network-monitoring" element={<NetworkMonitoringPage />} />
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
