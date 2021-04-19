import {storage} from '../firebase';
import { v4 } from 'uuid';

interface FileProps{
    downloadURL: string;
    fileId: string;
}
const useStorage = () => {

    const upload = async (img: File): Promise<FileProps> => {
       try{ 
            var storageRef = storage.ref();
            const fileId = v4();
            var fileRef = storageRef.child(`images/${fileId}.jpg`);
            const snapshot = await fileRef.put(img);
            const downloadURL = await snapshot.ref.getDownloadURL();
            return {
                downloadURL,
                fileId
            };
       }
       catch(err){
           throw err;
       }
    };

    const removeUpload = (fileId: string): Promise<any> => {
        try{
            var ref = storage.ref().child(`images/${fileId}.jpg`);
            return ref.delete();
        }
        catch(err){
            throw err;
        }
    }


    return {
        upload,
        removeUpload
    }
};

export default useStorage;