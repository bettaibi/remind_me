import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

interface FullPageContainerProps{
    show: boolean; 
}

export const FullPageContainer: React.FC<FullPageContainerProps> = ({ children, show }) => {

    const portal: any = document.getElementById('portal');
 
    const handleClick = (e: any) => {
        e.stopPropagation();
    }

    if(!show) return null;

    return (
        ReactDOM.createPortal(

            <div className="z-9999 full-page-container" onClick={handleClick} style = {{backgroundColor: '#fafafa'}}>
                <div className="overflow-auto">
                    {children}
                </div>
            </div>
            ,
            portal
        )
    )
}

interface FullPageHeaderProps {
    title: string;
    handleToggle: () => void;
}

export const FullPageHeader: React.FC<FullPageHeaderProps> = ({ title, handleToggle }) => {

    return (
        <div className="p-3 border-bottom d-flex align-items-center justify-content-between sticky-top bg-light">
            <h6 className="m-0">{title}</h6>
            <div className="text-right">
                <Button variant="secondary" className="mr-2" size="sm"
                    onClick={handleToggle}>Close</Button>
                <Button variant="primary" size="sm" type="submit"
                >Save</Button>
            </div>
        </div>
    )
}



