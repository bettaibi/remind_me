import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';


interface commonProps{
    handleToogle: () => void;
    noun: any;
}
export const EditNoun: React.FC<commonProps> = ({handleToogle, noun}) => {
    return (
        <div>
             <FullPageHeader title="Edit noun" handleToggle={handleToogle} />
            edit  noun
        </div>
    )
}
