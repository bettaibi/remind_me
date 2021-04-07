import React from 'react';
import { GrammarNotesModel } from '../../../../model/app.model';


interface commonProps{
    handleToogle: () => void;
    note: GrammarNotesModel;
}

export const EditNote: React.FC<commonProps> = ({handleToogle, note}) => {
    return (
        <div>
            
        </div>
    )
}
