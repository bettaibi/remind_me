import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { FullPageContainer } from '../../../components/FullPageContainer';
import { useToggleState } from '../../../components/useToggleState';
import { AppState, TensePracticeModel } from '../../../model/app.model';
import { getTenses } from '../../../store/actions/tenses.actions';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { Subject } from '../words/shared/Subject';
import { EditSentences } from './EditSentences';
import { NewSentences } from './NewSentences';

export const TensePractise: React.FC = () => {

    const sentences: any = useSelector((appState: AppState) => appState.tenses);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let data: TensePracticeModel[] = [
            {id: "ddf" ,label:'I eat a banana every hour', sentences: [
                {tense: 'Present Simple', sentence: 'I eat a banana every hour'},
                {tense: 'past Simple', sentence: 'I ate a banana an hour ago'},
                {tense: 'past progressive', sentence: 'I was eating a banana one hour ago'},
                {tense: 'present progressive', sentence: 'i am eating a banana'},
                {tense: 'future Simple', sentence: 'I will eat a banana'},
                {tense: 'future progressive', sentence: 'I will be eating a banana one hour later'},
                {tense: 'present perfect', sentence: 'I have just eaten a banana'},
            ]},
            {id: "ddf",label:'I eat a banana every hour', sentences: [
                {tense: 'Present Simple', sentence: 'I eat a banana every hour'},
                {tense: 'past Simple', sentence: 'I ate a banana an hour ago'},
                {tense: 'past progressive', sentence: 'I was eating a banana one hour ago'},
                {tense: 'present progressive', sentence: 'i am eating a banana'},
                {tense: 'future Simple', sentence: 'I will eat a banana'},
                {tense: 'future progressive', sentence: 'I will be eating a banana one hour later'},
                {tense: 'present perfect', sentence: 'I have just eaten a banana'},
            ]},
            {id: "ddf",label: 'I eat a banana every hour', sentences: [
                {tense: 'Present Simple', sentence: 'I eat a banana every hour'},
                {tense: 'past Simple', sentence: 'I ate a banana an hour ago'},
                {tense: 'past progressive', sentence: 'I was eating a banana one hour ago'},
                {tense: 'present progressive', sentence: 'i am eating a banana'},
                {tense: 'future Simple', sentence: 'I will eat a banana'},
                {tense: 'future progressive', sentence: 'I will be eating a banana one hour later'},
                {tense: 'present perfect', sentence: 'I have just eaten a banana'},
            ]}
        ];
        dispatch(getTenses(data));
    }

    return (
        <React.Fragment >
            
            <Subject
                title="Add sentences"
                definition="
                    A Note is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewSentences handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={sentences}>
                {
                    (item) => (
                        <TenseItem item={item} />
                    )
                }
            </PaginatedFiltrableList>

    </React.Fragment>
    )
}


interface NoteProp {
    item: TensePracticeModel;
}

const TenseItem: React.FC<NoteProp> = ({ item }) => {

    return (
        <React.Fragment>
        <ItemContent item={item} />

        <div className="text-right">
            <EditContainer item = {item} />
            <RemoveContainer item = {item} />
        </div>
    </React.Fragment>
    )
}

const ItemContent: React.FC<NoteProp> = ({ item }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditContainer: React.FC<NoteProp> = ({ item }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditSentences sentences={item} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};


const RemoveContainer: React.FC<NoteProp> = ({item}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove? This cannot be undone.',
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