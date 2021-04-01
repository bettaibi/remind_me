import React, { useState } from 'react';
import { Form, Accordion, Card, useAccordionToggle, Button, Pagination } from 'react-bootstrap';
import { ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { FullPageContainer, useFullPageContainer } from '../../../../components/FullPageContainer';
import { WordsLoadingPage } from '../WordsLoadingPage';
import { NewVerb } from './NewVerb';

export const Verbs: React.FC = () => {
    const {show, handleToggle} = useFullPageContainer();
    let [currentEventKey, setCurrentEventKey] = useState<string>('');

    const verbs = [1, 2, 3, 4, 5, 6, 7];

    const updateCurrentEventKey = (eventkey: string) => {
        if (currentEventKey === eventkey) {
            setCurrentEventKey('')
        } else {
            setCurrentEventKey(eventkey);
        }
    };

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}
            <div className="border rounded p-3 bg-light mb-3">
                <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta aperiam ullam natus ex numquam facere iste quos at tenetur.
                </p>
                <div className="text-right">
                    <button className="btn btn-primary btn-sm" onClick={handleToggle}>New verb</button>
                </div>
            </div>

            <Form>
                <Form.Control type="search" placeholder="Are you looking for a verb? filter here!" />
            </Form>

            <Accordion defaultActiveKey="ev0" className="mt-3">
                {
                    verbs.map((item: any, index: number) => (
                        <Verb key={'s' + index} verb={item} eventKey={'ev' + index}
                            currentEventKey={currentEventKey} updateEventKey={updateCurrentEventKey} />
                    ))
                }
            </Accordion>

            <div className="d-flex justify-content-end mt-3">
                <CustomPagination />
            </div>
            
            <FullPageContainer 
                show={show} 
                header={
                    (
                        <React.Fragment>
                            <h6 className="m-0">New Verb</h6>
                            <div className="text-right">
                                <Button variant="secondary" className="mr-2" size="sm"
                                onClick={handleToggle}>Close</Button>
                                <Button variant="primary" size="sm" type="submit"
                                >Save</Button>
                            </div>
                        </React.Fragment>
                    )
                }
                content = {
                    (
                        <NewVerb />
                    )
                }
            />

        </React.Fragment>
    )
}

interface VerbProps {
    verb: any;
    eventKey: string;
    currentEventKey: string;
    updateEventKey: (eventkey: string) => void;
}

const Verb: React.FC<VerbProps> = ({ verb, eventKey, currentEventKey, updateEventKey }) => {
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => {
            updateEventKey(eventKey)
        }
    );

   function onConfirm(){
       console.log("Confirm Clicked");
       toggleConfirmMessage();
   }
        
    const removeVerb = () =>{
        toggleConfirmMessage();
    }

    return (
        <Card>
            <Accordion.Toggle onClick={decoratedOnClick} className="bg-light d-flex flex-row justify-content-between" as={Card.Header} eventKey={eventKey}>
                <span>to take</span>
                {currentEventKey === eventKey ? <ChevronDown /> : <ChevronRight />}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    content

                    <div className="text-right">
                        <Button className="mr-2" variant="primary" size="sm">Update</Button>
                        <Button variant="danger" size="sm" onClick={removeVerb}>Remove</Button>
                    </div>
                </Card.Body>
            </Accordion.Collapse>

            <ConfirmDialog />
        </Card>
    )
}

const CustomPagination: React.FC = () => {


    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
        
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
};
