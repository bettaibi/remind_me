import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';


interface commonProps{
    handleToogle: () => void;
    adverb: any;
}
export const EditAdverb: React.FC<commonProps> = ({handleToogle, adverb}) => {
    
    return (
        <div>
             <FullPageHeader title="Edit Adverb" handleToggle={handleToogle} />
            
        </div>
    )
}
