import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Clients from './pages/Partners';
import Contact from './pages/Contact';
import IndustryDetail from './pages/IndustryDetail';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/industry/:id" element={<IndustryDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
