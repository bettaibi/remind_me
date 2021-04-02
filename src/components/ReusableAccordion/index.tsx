import React from 'react';
import { Card, Accordion, useAccordionToggle } from 'react-bootstrap';
import { ChevronDown, ChevronRight } from 'react-bootstrap-icons';

type ReusableAccordionState = {
    currentEventKey: string;
    updateCurrentEventKey(ev: string): void;
}

type ReusableAccordionProps = {
    children(obj: ReusableAccordionState) : JSX.Element;
}

type componentState = {
    currentEventKey: string;
}

export class ReusableAccordion extends React.Component<ReusableAccordionProps, componentState>{

    constructor(props: any){
        super(props)
        this.state = {currentEventKey: ''};
        this.updateCurrentEventKey = this.updateCurrentEventKey.bind(this);
    }
    
    updateCurrentEventKey(eventkey: string) {
        if (this.state.currentEventKey === eventkey) {
           this.setState({currentEventKey: ''});
        } else {
            this.setState({currentEventKey: eventkey});
        }
    };

    render(){
        console.log("render acc")
        return(
            <Accordion defaultActiveKey="ev0" className="mt-3">
                {
                    this.props.children({currentEventKey: this.state.currentEventKey, updateCurrentEventKey: this.updateCurrentEventKey})
                }
            </Accordion>
        )
    }
}

interface AccordionItemsProps{
    eventKey: string;
    currentEventKey: string;
    headerText: string;
    updateEventKey: (eventkey: string) => void;
}

export const AccordionItems: React.FC<AccordionItemsProps> = ({children, eventKey, currentEventKey, updateEventKey, headerText }) => {

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => {
             updateEventKey(eventKey)
        }
    );

    return (
        <Card>
            <Accordion.Toggle onClick={decoratedOnClick} className="bg-light d-flex flex-row justify-content-between" as={Card.Header} eventKey={eventKey}>
                <span>{headerText}</span>
                {currentEventKey === eventKey ? <ChevronDown /> : <ChevronRight />}
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
