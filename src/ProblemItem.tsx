import React from 'react';
import { Problems } from './ContestContext';

interface ProblemItemProps {
    problem: Problems;
}

const ProblemItem = ({ problem }: ProblemItemProps) => {
    let problemClass = '';
    if (problem.hidden) {
      problemClass = 'problem-hidden';
    } else if (!problem.accepted && problem.cntSub > 0) {
      problemClass = 'problem-wrong';
    } else if (problem.accepted) {
      problemClass = 'problem-correct';
    }
  
    return (
      <div className={`problem-item ${problemClass}`}>
        <span>+ {problem.cntSub} | </span>
        <span>{problem.penalty}</span>
      </div>
    );
};

export default ProblemItem;