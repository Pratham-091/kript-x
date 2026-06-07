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
      <Suspense fallback={
        <div style={{
          height: '100vh',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <img src="/logo.png" alt="Kript-X" style={{ height: '40px', width: 'auto', opacity: 0.8 }} />
          <div style={{
            width: '32px',
            height: '32px',
            border: '3px solid rgba(22, 163, 74, 0.1)',
            borderTop: '3px solid var(--accent-green-600, #16a34a)',
            borderRadius: '50%',
            animation: 'loader-spin 0.8s linear infinite'
          }} />
          <style>{`
            @keyframes loader-spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      }>
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
