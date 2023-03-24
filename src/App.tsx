import React, { useState, useEffect } from 'react';
import { ContestProvider, useContestContext } from './ContestContext';
import { FormScreen } from './FormScreen';
import { RankListScreen } from './RankListScreen';

const AppContent: React.FC = () => {
  const [screen, setScreen] = useState<'form' | 'rankList'>('form');
  const { contestInfo } = useContestContext();
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "n") {
        console.log("N key pressed!");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleFormSubmit = () => {
    setScreen('rankList');
  };

  const handleBack = () => {
    setScreen('form');
  };

  return (
    <>
      {screen === 'form' && <FormScreen onSubmit={handleFormSubmit} />}
      {screen === 'rankList' && <RankListScreen onBack={handleBack} />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="body">
      <ContestProvider>
      <AppContent />
      </ContestProvider>
    </div>
  );
};

export default App;