import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCustomPagination } from '../../../../components/CustomPagination';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { FullPageContainer, useFullPageContainer } from '../../../../components/FullPageContainer';
import { WordsLoadingPage } from '../WordsLoadingPage';
import { NewVerb } from './NewVerb';
import { AccordionItems, ReusableAccordion } from '../../../../components/ReusableAccordion';

export const Verbs: React.FC = () => {
    const {show, handleToggle} = useFullPageContainer();
    
    const verbs = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13];
    const { CustomPagination, list } = useCustomPagination(verbs, 5);

    console.log("parent")

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

            <ReusableAccordion>

            {
                ({currentEventKey, updateCurrentEventKey}) => (
                  <React.Fragment>
                      {
                            list.map((item: any, index: number) => (
                                <AccordionItems key={'s' + index}  eventKey={'ev' + index} headerText= {'verb '+item}
                                currentEventKey={currentEventKey} updateEventKey={(ev)=> updateCurrentEventKey(ev)}>
                                    
                                    <Verb verb={item}/>
                                </AccordionItems>
                            ))
                      }
                  </React.Fragment>
                )
            }

            </ReusableAccordion>

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
};

interface VerbProps {
    verb: any;
}

const Verb: React.FC<VerbProps> = ({verb}) => {
    console.log("verb component")
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

   function onConfirm(){
       console.log("Confirm Clicked");
       toggleConfirmMessage();
   }
        
    const removeVerb = () =>{
        toggleConfirmMessage();
    }

    return (
        <React.Fragment>
            <div>
                content
            </div>

            <div className="text-right">
                <Button className="mr-2" variant="primary" size="sm">Update</Button>
                <Button variant="danger" size="sm" onClick={removeVerb}>Remove</Button>
            </div>
            <ConfirmDialog />
        </React.Fragment>
    )
}
