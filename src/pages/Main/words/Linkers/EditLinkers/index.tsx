import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';


interface commonProps{
    handleToogle: () => void;
    linkers: any;
}
export const EditLinkers: React.FC<commonProps> = ({handleToogle, linkers}) => {
    
    return (
        <div>
             <FullPageHeader title="Edit Linkers" handleToggle={handleToogle} />
            
        </div>
    )
}
