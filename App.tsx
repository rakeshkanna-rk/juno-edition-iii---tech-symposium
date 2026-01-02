
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { EventSchedule } from './components/EventSchedule';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { EventsPage } from './components/EventsPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentPath(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial load
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#about':
        return <AboutPage />;
      case '#events':
        return <EventsPage />;
      default:
        return (
          <>
            <Hero />
            <StatsSection />
            <EventSchedule />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen marble-bg overflow-x-hidden">
      <Navbar currentPath={currentPath} />
      <main className="min-h-[80vh]">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
