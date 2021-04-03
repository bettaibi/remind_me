import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';


type ContextForm = {
    show: boolean;
    handleToggle: () => void;
}

interface FullPageContainerProps {
    show: boolean;
}

const PageContext = React.createContext<ContextForm>({show: false, handleToggle: ()=>{}});

export class OverlayContext extends React.Component{
    state: boolean;

    constructor(props: any){
        super(props);
        this.state = false;
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(): void{
        this.setState(!this.state);
    }


    render(){
        return (
            <PageContext.Provider value = {{show: this.state, handleToggle: this.handleToggle}}>
                <FullPageContainer show = {this.state}>
                    {this.props.children}
                </FullPageContainer>
            </PageContext.Provider>
        )
    }
}

const FullPageContainer: React.FC<FullPageContainerProps> = ({ children, show }) => {
    const portal: any = document.getElementById('portal');
 
    const handleClick = (e: any) => {
        e.stopPropagation();
    }

    if(!show) return null;

    return (
        ReactDOM.createPortal(

            <div className="z-9999 full-page-container bg-light" onClick={handleClick}>
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
}

export const FullPageHeader: React.FC<FullPageHeaderProps> = ({ title }) => {
    const {handleToggle} = useFulPageContext();

    return (
        <div className="p-3 border-bottom d-flex align-items-center justify-content-between sticky-top">
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

export function useFulPageContext() {
    return useContext(PageContext);
}




