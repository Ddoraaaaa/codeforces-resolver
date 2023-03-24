// import React, { useState } from 'react';
// import { useSpring, animated, config } from 'react-spring';

// interface DivItemProps {
//   index: number;
//   value: number;
//   onClick: (index: number) => void;
// }

// const DivItem: React.FC<DivItemProps> = ({ index, value, onClick }) => {
//   const spring = useSpring({
//     transform: `translateY(${index * 0}px)`,
//     config: {
//       mass: 1,
//       friction: 500,
//       tension: 20,
//     },
//   });

//   return (
//     <animated.div
//       className="div-item"
//       style={spring}
//       onClick={() => onClick(value)}
//     >
//       {value + 1}
//     </animated.div>
//   );
// };

// const App: React.FC = () => {
//   const [divOrder, setDivOrder] = useState<number[]>([0, 1, 2, 3, 4]);

//   const handleClick = (value: number) => {
//     const index = divOrder.indexOf(value);
//     const newOrder = [...divOrder];
//     newOrder.splice(index, 1);
//     newOrder.unshift(value);
//     setDivOrder(newOrder);
//   };

//   const sortedDivs = [...divOrder].sort((a, b) => {
//     if (a === divOrder[0]) return 1;
//     if (b === divOrder[0]) return -1;
//     return 0;
//   });

//   return (
//     <div className="App">
//       {sortedDivs.map((value, index) => (
//         <DivItem
//           key={value}
//           index={divOrder.indexOf(value)}
//           value={value}
//           onClick={handleClick}
//         />
//       ))}
//     </div>
//   );
// };
// export default App;


import React, { useState, useEffect } from 'react';
import { ContestProvider, useContestContext } from './ContestContext';
import { FormScreen } from './FormScreen';
import { RankListScreen } from './RankListScreen';
import progressScoreboard from './utils/ProgressScoreboard';

const AppContent: React.FC = () => {
  const [screen, setScreen] = useState<'form' | 'rankList'>('form');
  const { contestInfo, setContestInfo } = useContestContext();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "n") {
        let newContestInfo = {...contestInfo};
        progressScoreboard(newContestInfo);
        console.log(newContestInfo.curTeam);
        setContestInfo(newContestInfo);
        console.log("lmao", contestInfo)
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [contestInfo, setContestInfo]);

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