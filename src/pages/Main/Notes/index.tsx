import React from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { FullPageContainer } from '../../../components/FullPageContainer';
import { useToggleState } from '../../../components/useToggleState';
import { GrammarNotesModel } from '../../../model/app.model';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { Subject } from '../words/shared/Subject';
import { EditNote } from './EditNote';
import { NewNote } from './NewNote';


export const Notes: React.FC = () => {

    const notes: GrammarNotesModel[] = [
        {label: 'Casaul have', note: '', examples: [{sentence: '', answers : []}], question: ''},
        {label: 'How to make a suggession', note: '', examples: [{sentence: '', answers : []}], question: ''},
        {label: 'have to', note: '', examples: [{sentence: '', answers : []}], question: ''},
        {label: 'modal verbs', note: '', examples: [{sentence: '', answers : []}], question: ''},
        {label: 'tags question', note: '', examples: [{sentence: '', answers : []}], question: ''},
    ];

    return (
        <React.Fragment >
            
            <Subject
                title="New Note"
                definition="
                    A Note is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewNote handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={notes}>
                {
                    (item) => (
                        <Note note={item} />
                    )
                }
            </PaginatedFiltrableList>

    </React.Fragment>
    )
}


interface NoteProp {
    note: GrammarNotesModel;
}

const Note: React.FC<NoteProp> = ({ note }) => {

    return (
        <React.Fragment>
        <TopicContent note={note} />

        <div className="text-right">
            <EditContainer note = {note} />
            <RemoveContainer note = {note} />
        </div>
    </React.Fragment>
    )
}

const TopicContent: React.FC<NoteProp> = ({ note }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditContainer: React.FC<NoteProp> = ({ note }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditNote note={note} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};


const RemoveContainer: React.FC<NoteProp> = ({note}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Note? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    function onConfirm() {
        console.log("Confirm Clicked");
        toggleConfirmMessage();
    }

    return (
        <React.Fragment>
            <Button variant="danger" size="sm" onClick={toggleConfirmMessage}>Remove</Button>
            <ConfirmDialog />
        </React.Fragment>
    )
}