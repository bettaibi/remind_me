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
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>}

        <Modal.Body>
            {children}
        </Modal.Body>

      </Modal>
    )
}