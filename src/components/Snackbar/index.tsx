import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

type snackbarType = "info" | "danger" | "warning" | "success";

interface SnackbarState {
    title: string;
    isShown: boolean;
    message: string;
    type?: snackbarType
}

const SnackbarContainer: React.FC<SnackbarState> = ({ isShown, message, type, title }) => {
    const Portal: any = document.getElementById('portal');

    return (
        ReactDOM.createPortal(
                <Alert className="m-3 fixed-top" show={isShown} variant={type} style={{zIndex: 9999999999}}>
                    <h5>{title}</h5>
                    <p className="m-0">
                        {message}
                    </p>
                </Alert>,
            Portal
        )
    )
}

export const useSnackbar = () => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({title: '', isShown: false, message: '', type: 'success' });

    const showMsg = (title: string, msg: string, type?: snackbarType) => {
        setSnackbar({ isShown: true, message: msg, title, type: type || 'success' });

        setTimeout(()=>{
            setSnackbar({...snackbar, isShown: false });
        }, 3000);
    }

    const Snackbar = useCallback(
        () => (
            <SnackbarContainer
                message={snackbar.message}
                isShown={snackbar.isShown}
                type={snackbar.type}
                title = {snackbar.title}
            />
        ),
        [snackbar]
    )

    return {
        showMsg,
        Snackbar
    }

}
