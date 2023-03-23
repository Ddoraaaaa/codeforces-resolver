import React, { useState } from 'react';
import { ContestProvider, useContestContext } from './ContestContext';
import { FormScreen } from './FormScreen';
import { RankListScreen } from './RankListScreen';

const AppContent: React.FC = () => {
  const [screen, setScreen] = useState<'form' | 'rankList'>('form');
  const { contestInfo } = useContestContext();

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
    <ContestProvider>
      <AppContent />
    </ContestProvider>
  );
};

export default App;