import { NounModel, PhrasalModel, VerbModal, TopicModel, IdiomsModel, AdjectiveModel, AdverbModel, CustomResponse } from "../../../../model/app.model";

type wordTypes = NounModel & PhrasalModel & VerbModal & TopicModel & IdiomsModel & AdjectiveModel &  AdverbModel;

export interface wordsProps {
    word: wordTypes;
    findOneAndUpdate: (obj: any, id: string) => Promise<CustomResponse>;
    findOneAndDelete: (id: string) => Promise<CustomResponse>;
};

export interface wordContentProps{
    word: wordTypes;
};

export interface WordEditProps{
    findOneAndUpdate: (obj: any, id: string) => Promise<CustomResponse>;
    word: wordTypes;
};

export interface WordRemoveProps{
    findOneAndDelete: (id: string) => Promise<CustomResponse>;
    word: wordTypes;
}