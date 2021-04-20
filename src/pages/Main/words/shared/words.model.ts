import { NounModel, PhrasalModel, VerbModal, TodosModel, QAModel, TensePracticeModel, GrammarNotesModel, TopicModel, IdiomsModel, AdjectiveModel, AdverbModel, CustomResponse } from "../../../../model/app.model";

type wordTypes = NounModel & PhrasalModel & VerbModal & TopicModel & IdiomsModel 
& AdjectiveModel &  AdverbModel & GrammarNotesModel & TensePracticeModel & QAModel & TodosModel;

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

export interface AddProps{
    handleToogle: () => void;
    saveByKey: (obj: any, id: string) => any;
}

export interface EditProps{
    handleToogle: () => void;
    word: wordTypes;
    findOneAndUpdate: (obj: any, id: string) => any;
}