import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { FullPageContainer } from '../../../components/FullPageContainer';
import { useToggleState } from '../../../components/useToggleState';
import { AppState, GrammarNotesModel } from '../../../model/app.model';
import { getNotes } from '../../../store/actions/note.actions';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { Subject } from '../words/shared/Subject';
import { EditNote } from './EditNote';
import { NewNote } from './NewNote';

export const Notes: React.FC = () => {

    const notes = useSelector((appState: AppState) => appState.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let data:  GrammarNotesModel[] = [
            {id: 'kslsl',label: 'Casaul have', note: '', examples: [{sentence: '', answers : []}], question: ''},
            {id: 'kslsl',label: 'How to make a suggession', note: '', examples: [{sentence: '', answers : []}], question: ''},
            {id: 'kslsl',label: 'have to', note: '', examples: [{sentence: '', answers : []}], question: ''}
        ];
        dispatch(getNotes(data));
    }

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