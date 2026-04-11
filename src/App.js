import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav, Footer } from './components/NavFooter';
import Home       from './pages/Home';
import FBAPage    from './pages/FBAPage';
import HowItWorks from './pages/HowItWorks';
import Philosophy from './pages/Philosophy';
import Scan       from './pages/Scan';
import Results    from './pages/Results';
import Redirect   from './pages/Redirect';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  const [results, setResults] = useState(null);
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/amazon-fba"  element={<FBAPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/philosophy"  element={<Philosophy />} />
          <Route path="/scan"        element={<Scan setResults={setResults} />} />
          <Route path="/results"     element={<Results results={results} />} />
          <Route path="/redirect"    element={<Redirect />} />
          <Route path="*"            element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
