import React from 'react';
import { useContestContext } from './ContestContext';

interface RankListScreenProps {
  onBack: () => void;
}

export const RankListScreen: React.FC<RankListScreenProps> = ({ onBack }) => {
  const { contestInfo } = useContestContext();

  return (
    <div>
    </div>
  );
};