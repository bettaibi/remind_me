import { useState } from "react";


export const useToggleState = () =>{

    const [show, setShow] = useState<boolean>(false);

    const handleToggle = () => {
        setShow(prev => !prev);
    }

    const handleShow = () =>{
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    return {
        show,
        handleToggle,
        handleShow,
        handleHide
    }
}
