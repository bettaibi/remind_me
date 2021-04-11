import { CustomResponse } from "../model/app.model";
import db from './db';

const toJson = (success: boolean, msg: string, data?: any): CustomResponse => {
    return {
        message: msg,
        success,
        data
    };
};

const useCache = (collection: string) => {

    async function create (obj: any): Promise<CustomResponse> {
        try{
            await db.collection(collection).add(obj);
            return toJson(true, 'New record has been added');
        }
        catch(err){
            return toJson(false, 'Failed to create');
        }
    };

    async function saveByKey (obj: any, key: string): Promise<CustomResponse> {
        try{
            await db.collection(collection).add(obj, key);
            return toJson(true, 'New record has been added');
        }
        catch(err){
            return toJson(false, 'Failed to create');
        }
    };

    async function findOneAndUpdate (obj: any, id: string): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).doc({id}).update(obj);
            return toJson(true, 'New record has been updated', updated);
        }
        catch(err){
            return toJson(false, 'Failed to update');
        }
    };

    async function setById (obj: any, id: string): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).doc({id}).set(obj);
            return toJson(true, 'New record has been overwrited', updated);
        }
        catch(err){
            return toJson(false, 'Failed to overwrite');
        }
    };

    async function findOneAndDelete (id: string): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).doc({id}).delete();
            return toJson(true, 'New record has been removed', updated);
        }
        catch(err){
            return toJson(false, 'Failed to remove');
        }
    };

    async function drop (): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).delete();
            return toJson(true, 'The whole collection has been removed', updated);
        }
        catch(err){
            return toJson(false, 'Failed to remove');
        }
    };

    async function init (data: any[]): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).set(data);
            return toJson(true, 'Init the whole collection', updated);
        }
        catch(err){
            return toJson(false, 'Failed to remove');
        }
    };

    async function find (): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).get();
            return toJson(true, 'list of data', updated);
        }
        catch(err){
            return toJson(false, 'Failed to get');
        }
    };

    async function findOne (id: string): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).doc(id).get();
            return toJson(true, 'find a document', updated);
        }
        catch(err){
            return toJson(false, 'Failed to get');
        }
    };


    return {
        create,
        saveByKey,
        findOneAndUpdate,
        setById,
        findOneAndDelete,
        drop,
        init,
        find,
        findOne
    }
}

export default useCache;