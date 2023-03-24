import { render } from '@testing-library/react';
import React from 'react';
import { useContestContext } from './ContestContext';
import TeamCard from './TeamCard';
interface RankListScreenProps {
  onBack: () => void;
}

export const RankListScreen: React.FC<RankListScreenProps> = ({ onBack }) => {
  const { contestInfo } = useContestContext();

  // const renderList = Array.from({length: contestInfo.teamList.length}, (_, i) => i);
  // renderList[contestInfo.lastMoved] = renderList.length-1;
  // renderList[renderList.length-1] = contestInfo.lastMoved

  // return (
  //   <div>
  //     <h1 className='contest-name'>{contestInfo.name}</h1>
  //     {contestInfo.teamList.map((team, index) => (
  //         <TeamCard key={index} team={team} focus={index === contestInfo.curTeam}/>
  //     ))}
  //   </div>
  // );
  return (
    <div>
      <h1 className='contest-name'>{contestInfo.name}</h1>
      {contestInfo.teamList.map((team, index) => {
          return (
          <TeamCard
            key={team.teamId}
            index={index}
            team={team}
            focus={index === contestInfo.curTeam}
          />
      )})}
    </div>
  );
};