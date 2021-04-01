import { useState, useCallback } from 'react';
import { Dialog } from '../Dialog';
import { Button } from 'react-bootstrap';

interface ConfirmDialogProps{
    message: string;
    onConfirmClick: ()=>void;
}

export const useConfirmDialog = (obj: ConfirmDialogProps) =>{
    const [show, setShow] = useState<boolean>(false);

    const toggleConfirmMessage = () => setShow(!show);

    const handleClose = () => setShow(false);

    const ConfirmDialog = useCallback(
        () => (
            <Dialog show={show} centered={true} size="sm" handleClose={handleClose}>
                <h6>Confirm</h6>
                <p className="m-0">
                    {obj.message}
                </p>
                <div className="text-right">
                    <Button className="mr-2" variant="secondary" onClick={handleClose} size="sm">Close</Button>
                    <Button variant="primary" size="sm" onClick={obj.onConfirmClick}>Confirm</Button>
                </div>
            </Dialog>
        ),
        [show],
    )

    return {
        ConfirmDialog,
        toggleConfirmMessage
    }
}
