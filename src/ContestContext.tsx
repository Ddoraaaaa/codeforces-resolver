import React, { createContext, useContext, useState } from 'react';

export interface Problems {
    cntSub: number;
    lastSub: number;
    accepted: boolean;
    hidden: boolean;
    penalty: number;
}

export interface Teams {
    teamId: number;
    teamName: string;
    solved: number;
    penalty: number;
    problems: Problems[];
}

export interface ContestInfo {
  lastMoved: number;
  curTeam: number
  name: string;
  contestLog: string;
  domainAcc: string;
  eventList: string[];
  domainAccNames: {[key: string]: string};
  teamList: Teams[]
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
  lastMoved: 0,
  curTeam: 0,
  name: "placeholder",
  contestLog: '',
  domainAcc: '',
  eventList: [],
  domainAccNames: {},
  teamList: [],
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
