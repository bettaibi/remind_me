import React from 'react';
import { OverlayContext, useFulPageContext } from '../../../../../components/FullPageContainer';
import { Button } from 'react-bootstrap';

interface SubjectProps {
    definition: string;
    title: string;
}

export const Subject: React.FC<SubjectProps> = ({title, definition, children}) => {
    const {show, handleToggle} = useFulPageContext();

    console.log(handleToggle, show);

    const toogleOverlay = () =>{
        handleToggle();
    }

    return (
        <React.Fragment>
            <div className="border rounded p-3 bg-light mb-3">
                    <p className="m-0">
                        {definition}
                    </p>
                    <div className="text-right">
                        <Button variant="primary" size="sm" onClick={toogleOverlay}>{title}</Button>
                    </div>
            </div>

            <OverlayContext>
                { children}
            </OverlayContext>
        </React.Fragment>
    )
}
