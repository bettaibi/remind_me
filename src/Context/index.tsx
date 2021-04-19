import React, { Dispatch, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from "../firebase/firebase";

interface ContextProps{
    dispatch: Dispatch<any>;
    signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
    createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>;
    signOut: () => Promise<any>;
    sendPasswordResetEmail: (email: string) => Promise<any>;
    updateUserProfile: (displayName: string, photoURL: string) => Promise<any>;
    updateUserPassword: (newPassword: string) => Promise<any>;
    updateUserEmail: (newEmail: string) => Promise<any>;
    user: any;
}

const Shared = React.createContext({} as ContextProps);

export const ContextProvider: React.FC = ({children}) => {

    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{  
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(user);
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signInWithEmailAndPassword = (email: string, password: string) => {
          return auth.signInWithEmailAndPassword(email, password);
    };

    const createUserWithEmailAndPassword = (email: string, password: string) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const signOut = async () => {
       return auth.signOut();
    }

    const sendPasswordResetEmail = (email: string) =>{
        return auth.sendPasswordResetEmail(email);
    }

    // const deleteUserAccount = () => {
    //    return auth.currentUser?.delete();
    // }

    const updateUserProfile = async (displayName: string, photoURL: string) => {
        const user = auth.currentUser;
        if(user)
        return user.updateProfile({displayName, photoURL});
    }

    const updateUserPassword = async (newPassword: string) => {
        const user = auth.currentUser;
        if(user)
        return user.updatePassword(newPassword);
    }

    const updateUserEmail = async (newEmail: string) => {
        const user = auth.currentUser;
        if(user)
        return user.updateEmail(newEmail);
    }

    const value = {
        dispatch,
        createUserWithEmailAndPassword,
        signOut,
        updateUserEmail,
        updateUserPassword,
        updateUserProfile,
        sendPasswordResetEmail,
        signInWithEmailAndPassword,
        user: currentUser
    };

    return(
        <Shared.Provider value = {value}>
            {!loading && children}
        </Shared.Provider>
    )
};

export const useSharedContext = () => {
    const values = useContext(Shared);
    return values;
};