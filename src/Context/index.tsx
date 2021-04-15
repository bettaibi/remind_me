import React, { Dispatch, useContext } from 'react';
import { useDispatch } from 'react-redux';


interface ContextProps{
    dispatch: Dispatch<any>;

}

const Shared = React.createContext({} as ContextProps);

export const ContextProvider: React.FC = ({children}) => {
    const dispatch = useDispatch();

    return(
        <Shared.Provider value = {{dispatch}}>
            {children}
        </Shared.Provider>
    )
};

export const useSharedContext = () =>{
    const values = useContext(Shared)

    return values;
};
