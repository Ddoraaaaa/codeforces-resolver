import React, { createContext, useContext, useState } from 'react';

interface ContestInfo {
  contestLog: string;
  freezeTime: number;
  gold: number;
  silver: number;
  bronze: number;
}

interface ContestContextData {
  contestInfo: ContestInfo;
  setContestInfo: React.Dispatch<React.SetStateAction<ContestInfo>>;
}

const defaultContestInfo: ContestInfo = {
  contestLog: '',
  freezeTime: 0,
  gold: 1,
  silver: 1,
  bronze: 1,
};

const ContestContext = createContext<ContestContextData>({
  contestInfo: defaultContestInfo,
  setContestInfo: () => {},
});

interface ContestProviderProps {
    children: React.ReactNode;
  }
  

export const useContestContext = () => useContext(ContestContext);

export const ContestProvider: React.FC<ContestProviderProps> = ({children}) => {
  const [contestInfo, setContestInfo] = useState<ContestInfo>(defaultContestInfo);

  return (
    <ContestContext.Provider value={{ contestInfo, setContestInfo }}>
      {children}
    </ContestContext.Provider>
  );
};
