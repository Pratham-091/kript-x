import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteTracker from './components/RouteTracker';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const SuccessPage = lazy(() => import('./pages/SuccessPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

function App() {
  return (
    <Router>
      <RouteTracker />
      <Suspense fallback={<div style={{ height: '100vh', background: 'var(--bg-offwhite)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
