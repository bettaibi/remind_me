import { useCallback } from 'react';
import { Dialog } from '../Dialog';
import { Button } from 'react-bootstrap';
import { useToggleState } from '../useToggleState';

interface ConfirmDialogProps{
    message: string;
    onConfirmClick: ()=>void;
}

export const useConfirmDialog = (obj: ConfirmDialogProps) =>{
    const { handleToggle, show, handleHide } = useToggleState();

    const toggleConfirmMessage = () => handleToggle();

    const {message, onConfirmClick } = obj;

    const ConfirmDialog = useCallback(
        () => (
            <Dialog show={show} centered={true} size="sm" handleClose={handleHide}>
                <h6>Confirm</h6>
                <p>
                    {message}
                </p>
                <div className="text-right">
                    <Button className="mr-2" variant="secondary" onClick={handleHide} size="sm">Close</Button>
                    <Button variant="primary" size="sm" onClick={onConfirmClick}>Confirm</Button>
                </div>
            </Dialog>
        ),
        [show, message, onConfirmClick, handleHide]
    )

    return {
        ConfirmDialog,
        toggleConfirmMessage
    }
}
