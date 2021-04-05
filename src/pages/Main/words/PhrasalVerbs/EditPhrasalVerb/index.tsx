import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';


interface commonProps{
    handleToogle: () => void;
    phrasalVerb: any;
}
export const EditPhrasalVerb: React.FC<commonProps> = ({handleToogle, phrasalVerb}) => {
    
    return (
        <div>
             <FullPageHeader title="Edit Phrasal Verb" handleToggle={handleToogle} />
        </div>
    )
}
