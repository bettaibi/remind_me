import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';

interface VerbProps {
    verb: any;
    handleToggle: () => void;
}


export const EditVerb: React.FC<VerbProps> = ({verb, handleToggle}) => {
    return (
        <div>
           <FullPageHeader title = "Edit Verb" handleToggle={handleToggle} />
        </div>
    )
}
