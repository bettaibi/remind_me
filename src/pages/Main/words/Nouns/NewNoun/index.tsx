import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';


interface commonProps{
    handleToogle: () => void;
}
export const NewNoun: React.FC<commonProps> = ({handleToogle}) => {
    return (
        <div>
            <FullPageHeader title="New noun" handleToggle={handleToogle} />
        </div>
    )
}
