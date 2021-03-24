import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Alert, Button } from 'react-bootstrap';
import { title } from 'node:process';

type snackbarType = "info" | "danger" | "warning" | "success";

interface SnackbarState {
    title: string;
    isShown: boolean;
    message: string;
    type?: snackbarType
}

const SnackbarContainer: React.FC<SnackbarState> = ({ isShown, message, type, title }) => {
    const Portal: any = document.getElementById('portal');

    // if (!isShown) return null;

    return (
        ReactDOM.createPortal(
                <Alert className="m-3 z-9999 fixed-top" show={isShown} variant={type}>
                    <Alert.Heading>{title}</Alert.Heading>
                    <p>
                        {message}
                    </p>
                </Alert>,
            Portal
        )
    )
}

export const useSnackbar = () => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({title: '', isShown: false, message: '', type: 'success' });

    const showMsg = (msg: string, title: string, type?: snackbarType) => {
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
