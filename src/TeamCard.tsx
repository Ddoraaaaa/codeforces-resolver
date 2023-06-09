import React, { useState } from 'react';
import { useContestContext } from './ContestContext';
import { useSpring, animated, config } from 'react-spring';
import { Teams } from './ContestContext';
import ProblemItem from './ProblemItem';
import getMedal from './utils/MedalInfo';

interface TeamCardProps {
    index: number;
    team: Teams;
    focus: boolean;
}

const TeamCard:React.FC<TeamCardProps> = ({index, team, focus}) => {
  const { contestInfo } = useContestContext();
  const spring = useSpring({
    transform: `translateY(${index*130}px)`,
    config: {
        mass: 20,
        friction: 3,
        tension: 30,
        clamp : true
      },
  });
//   console.log(team);

  return (
    <animated.div
      className="div-item"
      style={spring}
    >                
        <div className={focus ? "team-card lighter" : "team-card" + getMedal(index, contestInfo)}>
        <div className="team-name">#{index+1}: {team.teamName}</div>
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
    </animated.div>
  );
};

export default TeamCard;