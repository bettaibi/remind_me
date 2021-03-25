import { CustomResponse } from "../../model/app.model";
import { auth } from "../firebase";

const useAuth = () =>{

    const signInWithEmailAndPassword = async (email: string, password: string): Promise<CustomResponse> =>{
        try{
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            if(!userCredential){
               return {message: 'Failed to logged in', success: false };
            }
            return {success: true, message: 'Welcome back', data: userCredential.user}
          }
          catch(error){
           return {message: error.message, success: false };
          }
    };

    const createUserWithEmailAndPassword = async (email: string, password: string): Promise<CustomResponse> =>{
        try{
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            if(!userCredential){
                return {message: 'Failed to Register', success: false };
            }
            return {success: true, message: 'A new Account has been created', data: userCredential.user}
        }
        catch(err){
            return {message: err.message, success: false };
        }
    }

    const signOut = async (): Promise<CustomResponse> => {
        try{
            await auth.signOut();
            return {success: true, message: 'User logged out'};
        }
        catch(err){
            return {message: 'Something wrong, Failed to sign out', success: false };
        }
    }

    const sendPasswordResetEmail = async (email: string): Promise<CustomResponse> =>{
        try{
            await auth.sendPasswordResetEmail(email);
            return {success: true, message: 'A reset link has been sent to your email'};
        }
        catch(err){
            return {success: false, message: err.message};
        }
    }

    const deleteUserAccount = async (): Promise<CustomResponse> =>{
        try{
            await auth.currentUser?.delete();
            return {success: true, message: 'Account removed'};
        }
        catch(err){
            return {success: false, message: err.message};
        }
    }

    const updateUserProfile = async (displayName: string, photoURL: string): Promise<CustomResponse> => {
        try{
            await auth.currentUser?.updateProfile({displayName, photoURL})
            return {success: true, message: 'Profile updated'};
        }
        catch(err){
            return {success: false, message: err.message};
        }
    }

    return {
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        sendPasswordResetEmail,
        deleteUserAccount,
        updateUserProfile
    }
};

export default useAuth;