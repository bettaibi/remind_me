import React from 'react';
import { FullPageContainer } from '../../../../../components/FullPageContainer';
import { Button } from 'react-bootstrap';
import { useToggle } from '../../../../../components/useToggle';

interface SubjectProps {
    definition: string;
    title: string;
    children: ( handleToggle: () => void ) => JSX.Element;
}

export const Subject: React.FC<SubjectProps> = ({title, definition, children}) => {
    const { handleToggle, show } = useToggle();

    return (
        <React.Fragment>
            <div className="border rounded p-3 bg-light mb-3">
                    <p >
                        {definition}
                    </p>
                    <div className="text-right">
                        <Button variant="primary" size="sm" onClick={handleToggle}>{title}</Button>
                    </div>
            </div>

        <FullPageContainer show={show}>
            {children(handleToggle)}
        </FullPageContainer>

        </React.Fragment>
    )
}
