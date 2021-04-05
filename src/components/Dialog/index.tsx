import React from 'react';
import { Modal } from 'react-bootstrap';

interface DialogProps{
    show: boolean;
    centered: boolean;
    size?: "sm" | "lg" | "xl" | undefined;
    headerText?: string;
    handleClose: () => void;
}

export const Dialog: React.FC<DialogProps> = ({show, handleClose, centered, size, children, headerText}) => {

    return (
        <Modal 
        show={show} 
        onHide={handleClose}
        centered={centered}
        size={size}
        >

       { headerText && <Modal.Header closeButton>
          <h6 className="m-0 align-self-center">{headerText}</h6>
        </Modal.Header>}

        <Modal.Body>
            {children}
        </Modal.Body>

      </Modal>
    )
}