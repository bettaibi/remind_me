import React from 'react';
import { FullPageContainer, useFullPageContainer } from '../../../../../components/FullPageContainer';
import { Button } from 'react-bootstrap';

interface SubjectProps {
    definition: string;
    title: string;
}

export const Subject: React.FC<SubjectProps> = ({title, definition, children}) => {
    const {show, handleToggle} = useFullPageContainer();

    return (
        <React.Fragment>
            <div className="border rounded p-3 bg-light mb-3">
                <p className="m-0">
                    {definition}
                </p>
                <div className="text-right">
                    <Button variant="primary" size="sm" onClick={handleToggle}>{title}</Button>
                </div>
            </div>

            <FullPageContainer
                show={show}
                header={
                    (
                        <React.Fragment>
                            <h6 className="m-0">{title}</h6>
                            <div className="text-right">
                                <Button variant="secondary" className="mr-2" size="sm"
                                    onClick={handleToggle}>Close</Button>
                                <Button variant="primary" size="sm" type="submit"
                                >Save</Button>
                            </div>
                        </React.Fragment>
                    )
                }
                content={
                   (
                       <React.Fragment>
                           {children}
                       </React.Fragment>
                   )
                }
            />
        </React.Fragment>
    )
}
