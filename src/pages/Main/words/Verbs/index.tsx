import React from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewVerb } from './NewVerb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../PaginatedFiltrableList';

export const Verbs: React.FC = () => {
    const verbs = [
        {label: 'take'},
        {label: 'eat'},
        {label: 'manage'},
        {label: 'create'},
        {label: 'remove'},
        {label: 'delete'},
        {label: 'add'},
        {label: 'kill'},
        {label: 'hate'},
        {label: 'revenge'},
        {label: 'put'},
    ];

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <Subject 
                title="New Verb"
                definition="
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta aperiam ullam natus ex numquam facere iste quos at tenetur.
                ">
                <NewVerb />
            </Subject>

            <PaginatedFiltrableList dataSource={verbs}>
                {
                    (item) => (
                        <Verb verb={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface VerbProps {
    verb: any;
}

const Verb: React.FC<VerbProps> = ({verb}) => {

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
