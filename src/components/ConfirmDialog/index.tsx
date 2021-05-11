import { useCallback, useEffect, useState } from 'react';
import { Dialog } from '../Dialog';
import { Button, Spinner } from 'react-bootstrap';
import { useToggle } from '../useToggle';

interface ConfirmDialogProps {
    message: string;
    onConfirmClick: () => void;
}

export const useConfirmDialog = (obj: ConfirmDialogProps) => {
    const { handleToggle, show, handleHide } = useToggle();
    const [isLoading, setIsloading] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            setIsloading(false);
        }
    }, []);

    const toggleConfirmMessage = () => {
        handleToggle();
    };

    const { message, onConfirmClick } = obj;

    const ConfirmDialog = useCallback(
        () => (
            <Dialog show={show} centered={true} size="sm" handleClose={handleHide}>
                <h6>Confirm</h6>
                <p>
                    {message}
                </p>
                <div className="text-right">
                    <Button className="mr-2" variant="secondary" onClick={handleHide} size="sm">Close</Button>
                    <Button variant="primary" size="sm" onClick={onConfirmClick} disabled={isLoading}>
                        {!isLoading ? 'Confirm' : (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="ml-2">Loading...</span>
                            </>
                        )}
                    </Button>
                </div>
            </Dialog>
        ),
        [show, message, onConfirmClick, handleHide, isLoading]
    )

    return {
        ConfirmDialog,
        toggleConfirmMessage,
        setIsloading
    }
}
