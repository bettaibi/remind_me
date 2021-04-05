import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export const ReusableAccordion: React.FC = ({children}) =>{

    return(
        <Accordion defaultActiveKey="ev0" className="mt-3">
            {
                children
            }
        </Accordion>
    )
}

interface AccordionItemsProps{
    eventKey: string;
    headerText: string;
}

export const AccordionItems: React.FC<AccordionItemsProps> = ({children, eventKey, headerText }) => {

    return (
        <Card>
            <Accordion.Toggle className="bg-light d-flex flex-row justify-content-between" as={Card.Header} eventKey={eventKey}>
                <p className="m-0">{headerText}</p>
                <ChevronRight />
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                  {
                      children
                  }
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
