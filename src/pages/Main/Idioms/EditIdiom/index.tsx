import React from 'react';

interface commonProps{
    handleToogle: () => void;
    idiom: any;
}
export const EditIdiom: React.FC<commonProps> = ({handleToogle, idiom}) => {
    
    return (
        <div>
             <div>
                 content
             </div>

           <button className="btn btn-secondary" onClick={handleToogle}>close</button>
        </div>
    )
}
