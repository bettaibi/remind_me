import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';


interface commonProps{
    handleToogle: () => void;
    adjective: any;
}
export const EditAdjective: React.FC<commonProps> = ({handleToogle, adjective}) => {
    
    return (
        <div>
             <FullPageHeader title="Edit Adjective" handleToggle={handleToogle} />
            edit  Adjective
        </div>
    )
}
