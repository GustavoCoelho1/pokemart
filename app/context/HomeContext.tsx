import { createContext, useState } from 'react';

interface HomeContextProps {
    bgColor: string;
    setBgColor: (val: string) => void;
}

const HomeContext = createContext({} as HomeContextProps);

export default HomeContext;
