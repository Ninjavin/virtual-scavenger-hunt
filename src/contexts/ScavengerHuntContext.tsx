import React, { createContext, useContext, useState } from 'react';

interface ScavengerHuntContextType {
    items: any[];
    scores: any[];
    addItem: any;
    addScore: any;
}

const ScavengerHuntContext = createContext<ScavengerHuntContextType | undefined>(undefined);

export const ScavengerHuntProvider: React.FunctionComponent<any> = ({ children }) => {
    const [items, setItems] = useState<any[]>([]);
    const [scores, setScores] = useState<any[]>([]);

    const addItem = (item: any) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const addScore = (score: any) => {
        setScores((prevScores) => [...prevScores, score]);
    };

    return (
        <ScavengerHuntContext.Provider value={{ items, scores, addItem, addScore }}>
            {children}
        </ScavengerHuntContext.Provider>
    );
};

export const useScavengerHunt = () => {
    const context = useContext(ScavengerHuntContext);
    if (context === undefined) {
        throw new Error('useScavengerHunt must be used within a ScavengerHuntProvider!');
    }
    return context;
};
