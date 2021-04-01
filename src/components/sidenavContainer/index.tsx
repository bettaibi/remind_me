import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import { Sidenav } from '../Sidenav';
import './sidenavContainer.scss';

interface SidenavContainerProps{
    isOpen: boolean;
    onCloseCallback: () => void;
}

export const SidenavContainer: React.FC<SidenavContainerProps> = ({isOpen, onCloseCallback}) => {

     const portal: any = document.getElementById('portal');
     const sidenavContainerRef: any = useRef();
     const overlayContainerRef: any = useRef();

     const onClose = (e: any): void =>{
        try{
            e.preventDefault();
            sidenavContainerRef.current.classList.replace('slideInLeft', 'slideOut');
            overlayContainerRef.current.classList.replace('fadeIn', 'fadeOut');
            setTimeout(()=>{
                onCloseCallback();
            },300);
        }   
        catch(err){
            throw err;
        }
     };

    if (!isOpen) return null;
    return (
        ReactDOM.createPortal(
            <React.Fragment>
            <div className="sidenav-overlay-container fadeIn" ref={overlayContainerRef} onClick={onClose}></div>
            <div className="sidenavContainer shadow-sm slideInLeft" ref={sidenavContainerRef}>
                <Sidenav />
            </div>
            </React.Fragment>,
            portal
        )
    )
}

export const useSidenavContainer = (initial_value = false) =>{
    const [isOpen, setIsOpen] = useState<boolean>(initial_value);
    
    const toggle = (): void => {
        try{
            setIsOpen((previous) => !previous);
        }
        catch(err){
            throw err;
        }
    }

    return {isOpen, toggle};
};
