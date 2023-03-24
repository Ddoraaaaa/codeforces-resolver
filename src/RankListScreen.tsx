import React from 'react';
import { useContestContext } from './ContestContext';
import TeamCard from './TeamCard';
interface RankListScreenProps {
  onBack: () => void;
}

export const RankListScreen: React.FC<RankListScreenProps> = ({ onBack }) => {
  const { contestInfo } = useContestContext();

  return (
    <div>
      <h1 className='contest-name'>{contestInfo.name}</h1>
      {contestInfo.teamList.map((team, index) => (
          <TeamCard key={index} team={team} focus={index === contestInfo.curTeam}/>
      ))}
    </div>
  );
};