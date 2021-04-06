import React from 'react';
import { TopicModel } from '../../../../model/app.model';


interface commonProps{
    handleToogle: () => void;
    topic: TopicModel;
}

export const EditTopic:React.FC<commonProps> = ({handleToogle, topic}) => {
    return (
        <div>
            
        </div>
    )
}
