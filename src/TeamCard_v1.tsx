import React from 'react';
import { Teams } from './ContestContext';
import ProblemItem from './ProblemItem';

interface TeamCardProps {
  team: Teams;
  focus: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, focus }) => {
  return (
    <div className={focus ? "team-card lighter" : "team-card"}>
      <div className="team-name">{team.teamName}</div>
      <div className="team-info">
        <div className="team-solved">{team.solved} problems solved</div>
        <div className="team-penalty">Penalty: {Math.floor(team.penalty/1)}</div>
      </div>
      <div className="problem-list">
        {team.problems.map((problem, index) => (
          <ProblemItem key={index} problem={problem}/>  
        ))}
      </div>
    </div>
  );
};



export default TeamCard;