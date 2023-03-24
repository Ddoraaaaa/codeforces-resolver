import { render } from '@testing-library/react';
import React from 'react';
import { useContestContext } from './ContestContext';
import TeamCard from './TeamCard';
interface RankListScreenProps {
  onBack: () => void;
}

export const RankListScreen: React.FC<RankListScreenProps> = ({ onBack }) => {
  const { contestInfo } = useContestContext();

  const renderList = Array.from({length: contestInfo.teamList.length}, (_, i) => i);
  renderList.sort((a:any, b:any) => {
    if(contestInfo.teamList[a].teamId === contestInfo.lastMoved) return 1;
    if(contestInfo.teamList[b].teamId === contestInfo.lastMoved) return -1;
    return 0;
  })

  return (
    <div>
      <h1 className='contest-name'>{contestInfo.name}</h1>
      {renderList.map((index, _) => {
          return (
          <TeamCard
            key={contestInfo.teamList[index].teamId}
            index={index}
            team={contestInfo.teamList[index]}
            focus={index === contestInfo.curTeam}
          />
      )})}
    </div>
  );
};