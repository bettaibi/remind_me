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

    async function save (obj: any): Promise<CustomResponse> {
        try{
            const saved = await db.collection(collection).add(obj);
            return toJson(true, 'New record has been added', saved);
        }
        catch(err){
            return toJson(false, 'Failed to create');
        }
    };

    async function saveByKey (obj: any, key: string): Promise<CustomResponse> {
        try{
            const label = obj.label.trim().toLowerCase();
            const found = await db.collection(collection).doc({label}).get();
            if(found){
                return toJson(false, `The word ${label} already exsist!`);
            }
            const saved = await db.collection(collection).add({
                ...obj, 
                label: label
            }, key);
            return toJson(true, 'New record has been added', saved);
        }
        catch(err){
            return toJson(false, 'Failed to persist a new Word');
        }
    };

    async function findOneAndUpdate (obj: any, id: string): Promise<CustomResponse> {
        try{
            const updated = await db.collection(collection).doc({id}).update({
                ...obj,
                label: obj.label.trim().toLowerCase()
            });
            return toJson(true, 'New record has been updated', updated);
        }
        catch(err){
            return toJson(false, 'Failed to update');
        }
    };

    async function setById (obj: any, id: string): Promise<CustomResponse> {
        try{
            const doc = await db.collection(collection).doc({id}).set(obj);
            return toJson(true, 'New record has been overwrited', doc);
        }
        catch(err){
            return toJson(false, 'Failed to overwrite');
        }
    };

    async function findOneAndDelete (id: string): Promise<CustomResponse> {
        try{
            const removed = await db.collection(collection).doc({id}).delete();
            return toJson(true, 'New record has been removed', removed);
        }
        catch(err){
            return toJson(false, 'Failed to remove');
        }
    };

    async function drop (): Promise<CustomResponse> {
        try{
            await db.collection(collection).delete();
            return toJson(true, 'The whole collection has been removed');
        }
        catch(err){
            return toJson(false, 'Failed to remove');
        }
    };

    async function init (data: any[]): Promise<CustomResponse> {
        try{
            const datasource = await db.collection(collection).set(data);
            return toJson(true, 'Init the whole collection', datasource);
        }
        catch(err){
            return toJson(false, 'Failed to remove');
        }
    };

    async function find (): Promise<CustomResponse> {
        try{
            const list = await db.collection(collection).get();
            return toJson(true, 'list of data', list);
        }
        catch(err){
            return toJson(false, 'Failed to get');
        }
    };

    async function findOne (id: string): Promise<CustomResponse> {
        try{
            const found = await db.collection(collection).doc({id}).get();
            return toJson(true, 'find a document', found);
        }
        catch(err){
            return toJson(false, 'Failed to get');
        }
    };


    return {
        save,
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