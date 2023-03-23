import React from 'react';
export interface Problems {
    id: number;
    name: string;
    solved: boolean;
    submissions: number;
    lastsub: number;
}

export interface Teams {
    id: number;
    name: string;
    solved: number;
    penalty: number;
    problems: Problems[]
}
const List = ({teams}:{teams: Teams[]}) => {
    console.log("lmao", teams)
    return (
        <div className="list-container">
            <TransitionGroup>
                {teams.map((team) => (
                    <CSSTransition key={team.id} timeout={500} classNames="slide">
                        <div  className="team-card">
                            <div className="team-name">{team.name}</div>
                            <div className="team-solved">{team.solved}</div>
                            <div className="team-penalty">{team.penalty}</div>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default List;

// interface DivItemProps {
//   index: number;
//   value: number;
//   onClick: (index: number) => void;
// }

// const DivItem = ({ index, value, onClick } : DivItemProps) => {
//   const spring = useSpring({
//     transform: `translateY(${index * 50}px)`,
//     config: {mass:50, tension:500, friction:200, clamp: true},
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
//     const [divOrder, setDivOrder] = useState<number[]>([0, 1, 2, 3, 4]);
  
//     const handleClick = (value: number) => {
//       const index = divOrder.indexOf(value);
//       const newOrder = [...divOrder];
//       newOrder.splice(index, 1);
//       newOrder.unshift(value);
//       setDivOrder(newOrder);
//     };
  
//     const sortedDivs = [...divOrder].sort((a, b) => {
//       if (a === divOrder[0]) return 1;
//       if (b === divOrder[0]) return -1;
//       return 0;
//     });
//     console.log(sortedDivs)
//     return (
//       <div className="App">
//         {sortedDivs.map((value, index) => (
//           <DivItem
//             key={value}
//             index={divOrder.indexOf(value)}
//             value={value}
//             onClick={handleClick}
//           />
//         ))}
//       </div>
//     );
//   };

// export default App;