import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number; 
    levelUp: () => void;
    startNewChalleng: () => void;
}

interface ChallegesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallegesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);


    function levelUp(){
      setLevel(level + 1);
    }

    function startNewChalleng(){
        console.log('New challenge')
    }
  
    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currentExperience, 
                challengesCompleted, 
                levelUp,
                startNewChalleng,
            }}
        >
            {children}
        </ChallengesContext.Provider>  
    )
}