
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { EventSchedule } from './components/EventSchedule';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen marble-bg">
      <Navbar currentPath={currentPath} />
      <main className="min-h-[80vh]">
        {currentPath === '#about' ? (
          <AboutPage />
        ) : (
          <>
            <Hero />
            <StatsSection />
            <EventSchedule />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
