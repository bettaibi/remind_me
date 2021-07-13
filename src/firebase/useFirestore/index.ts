import {firestore} from '../firebase';

export const useFireStore = () => {

    function getStoredData(key: string){
        firestore.collection(key).doc('storedData').get();
    }

    return {

    }
}