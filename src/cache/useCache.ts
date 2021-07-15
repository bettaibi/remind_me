import { Collections } from ".";
import { BackupDataModel, CustomResponse } from "../model/app.model";
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

    async function init (key: string, value: any[]): Promise<void> {
        try{
            await db.collection(key.toUpperCase()).set(value, { keys: true });
        }
        catch(err){
            throw err;
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

    async function getStatistics (): Promise<CustomResponse> {
        try{
            const verbs = await db.collection(Collections.VERBS).get();
            const nouns = await db.collection(Collections.NOUNS).get();
            const adjectives = await db.collection(Collections.ADJECTIVES).get();
            const adverbs = await db.collection(Collections.ADVERBS).get();
            const phrasalVerb = await db.collection(Collections.PHRASALVERBS).get();
            const linkers = await db.collection(Collections.LINKERS).get();

            return toJson(true, 'get Statistics', [verbs.length, nouns.length, adjectives.length, adverbs.length, phrasalVerb.length, linkers.length]);
        }
        catch(err){
            throw err;
        }
    }

    async function getDatetoStore(): Promise<BackupDataModel>{

        return {
            verbs: JSON.stringify(await db.collection(Collections.VERBS).get()),
            nouns: JSON.stringify(await db.collection(Collections.NOUNS).get()),
            adjectives: JSON.stringify(await db.collection(Collections.ADJECTIVES).get()),
            adverbs: JSON.stringify(await db.collection(Collections.ADVERBS).get()),
            phrasalVerbs: JSON.stringify(await db.collection(Collections.PHRASALVERBS).get()),
            linkers: JSON.stringify(await db.collection(Collections.LINKERS).get()),
            idioms: JSON.stringify(await db.collection(Collections.IDIOMS).get()),
            notes: JSON.stringify(await db.collection(Collections.NOTES).get()),
            tenses: JSON.stringify(await db.collection(Collections.TENSES).get()),
            topics: JSON.stringify(await db.collection(Collections.TOPICS).get()),
            qa: JSON.stringify(await db.collection(Collections.QA).get()),
            todos: JSON.stringify(await db.collection(Collections.TODOS).get()),
        };
    }


    return {
        save,
        saveByKey,
        findOneAndUpdate,
        setById,
        findOneAndDelete,
        drop,
        init,
        find,
        findOne,
        getStatistics,
        getDatetoStore
    }
}

export default useCache;