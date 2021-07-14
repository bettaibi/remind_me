import { BackupDataModel, BackupDatesModel } from '../../model/app.model';
import { firestore } from '../firebase';

export const useFireStore = () => {

    async function getStoredData(key: string){
       try{
        const data = await firestore.collection(key).doc('storedData').get();
        return data;
       }
       catch(err){
           throw err;
       }
    }

    async function updateStoredData(key: string, payload: BackupDataModel){
        try{
            return await firestore.collection(key).doc('storedData').set(payload);
        }
        catch(err){
            throw err;
        }
    }

    async function getlastBackupDates(key: string){
        try{
            const dates = await firestore.collection(key).doc('dates').get();
            return dates;
        }
        catch(err){
            throw err;
        }
    }

    async function updateDates(key: string, payload: BackupDatesModel){
        try{
            return await firestore.collection(key).doc('dates').set(payload);
        }
        catch(err){
            throw err;
        }
    }

    return {
        getStoredData,
        updateDates,
        getlastBackupDates,
        updateStoredData
    }
};