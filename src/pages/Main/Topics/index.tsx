import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { FullPageContainer } from '../../../components/FullPageContainer';
import { useToggleState } from '../../../components/useToggleState';
import { AppState, TopicModel } from '../../../model/app.model';
import { getTopics } from '../../../store/actions/topic.actions';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { Subject } from '../words/shared/Subject';
import { EditTopic } from './EditTopic';
import { NewTopic } from './NewTopic';


export const Topics: React.FC = () => {

    const topics = useSelector((appState: AppState) => appState.topics);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let data: TopicModel[] =  [
            {id:'ds', label: 'collaboration', vocabs:[] ,paragraph: ""},
            {id:'ds', label: 'weakness', vocabs:[] ,paragraph: ""},
        ];
        dispatch(getTopics(data));
    }

    return (
        <React.Fragment >
            
            <Subject
                title="New Topic"
                definition="
                    A Topic is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewTopic handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={topics}>
                {
                    (item) => (
                        <Topic topic={item} />
                    )
                }
            </PaginatedFiltrableList>

    </React.Fragment>
    )
}


interface TopicProp {
    topic: TopicModel;
}

const Topic: React.FC<TopicProp> = ({ topic }) => {

    return (
        <React.Fragment>
            <TopicContent topic={topic} />

            <div className="text-right">
                <EditContainer topic = {topic} />
                <RemoveContainer topic = {topic} />
            </div>
        </React.Fragment>
    )
}

const TopicContent: React.FC<TopicProp> = ({ topic }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditContainer: React.FC<TopicProp> = ({ topic }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditTopic topic={topic} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};


const RemoveContainer: React.FC<TopicProp> = ({topic}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Topic? This cannot be undone.',
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