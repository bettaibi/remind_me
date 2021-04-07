import React from 'react';
import { TensePracticeModel } from '../../../../model/app.model';


interface commonProps{
    handleToogle: () => void;
    sentences: TensePracticeModel;
}

export const EditSentences: React.FC<commonProps> = ({handleToogle, sentences}) => {
    return (
        <div>
            
        </div>
    )
}
