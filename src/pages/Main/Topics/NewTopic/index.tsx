import React from 'react'


interface commonProps{
    handleToogle: () => void;
}
export const NewTopic: React.FC<commonProps> = ({handleToogle}) => {

    return (
        <div>
            New Topic 
        </div>
    )
}
