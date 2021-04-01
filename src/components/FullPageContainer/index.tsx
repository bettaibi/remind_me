import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';

interface FullPageProps{
    show: boolean;
    header: JSX.Element;
    content: JSX.Element;
}

export const FullPageContainer : React.FC<FullPageProps> = ({ show, header, content }) => {
    const portal: any = document.getElementById('portal');

    const handleClick = (e: any) => {
        e.stopPropagation();
    }

    if(!show) return null;

    return (
        ReactDOM.createPortal(
            <div className="z-9999 full-page-container bg-light show" onClick={handleClick}>
                <div className="border-bottom p-3 d-flex flex-row justify-content-between align-items-center">
                    {header}
                </div>
                <div className="overflow-auto">
                    <Container>
                     {content}
                    </Container>  
                </div>
            </div>,
            portal
        )
    )
}

export const useFullPageContainer = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleToggle = () =>{
        setShow(!show)
    };

    return{
        show,
        handleToggle
    };

};




