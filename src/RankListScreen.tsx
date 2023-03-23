import React from 'react';
import { useContestContext } from './ContestContext';

interface RankListScreenProps {
  onBack: () => void;
}

export const RankListScreen: React.FC<RankListScreenProps> = ({ onBack }) => {
  const { contestInfo } = useContestContext();

  const eventList:string[] = contestInfo.contestLog.split("\n");
  for(var event of eventList) {
    console.log(event)
  }
  return (
    <div>
    </div>
  );
};