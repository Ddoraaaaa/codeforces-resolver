import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './App.css';

interface DivItemProps {
  index: number;
  value: number;
  onClick: (index: number) => void;
}

const DivItem: React.FC<DivItemProps> = ({ index, value, onClick }) => {
  const spring = useSpring({
    transform: `translateY(${index * 50}px)`,
    config: config.stiff,
  });

  return (
    <animated.div
      className="div-item"
      style={spring}
      onClick={() => onClick(value)}
    >
      {value + 1}
    </animated.div>
  );
};

const App: React.FC = () => {
    const [divOrder, setDivOrder] = useState<number[]>([0, 1, 2, 3, 4]);
  
    const handleClick = (value: number) => {
      const index = divOrder.indexOf(value);
      const newOrder = [...divOrder];
      newOrder.splice(index, 1);
      newOrder.unshift(value);
      setDivOrder(newOrder);
    };
  
    const sortedDivs = [...divOrder].sort((a, b) => {
      if (a === divOrder[0]) return 1;
      if (b === divOrder[0]) return -1;
      return 0;
    });
  
    return (
      <div className="App">
        {sortedDivs.map((value, index) => (
          <DivItem
            key={value}
            index={divOrder.indexOf(value)}
            value={value}
            onClick={handleClick}
          />
        ))}
      </div>
    );
  };

export default App;